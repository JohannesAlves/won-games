import "../../../.jest/server.mock";
import FormForgotPassword from ".";
import { render, screen } from "utils/test-utils";
import userEvent from "@testing-library/user-event";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require("next/router"), "useRouter");
let query = {};

useRouter.mockImplementation(() => ({
    query,
}));

describe("<FormForgotPassword />", () => {
    it("should validate email", async () => {
        render(<FormForgotPassword />);

        await userEvent.type(screen.getByPlaceholderText(/email/i), "valid@email.com");
        userEvent.click(screen.getByRole("button", { name: /send email/i }));

        expect(
            await screen.findByText(/You just received on email/i),
        ).toBeInTheDocument();
    });

    it("should not validate email", async () => {
        render(<FormForgotPassword />);

        await userEvent.type(screen.getByPlaceholderText(/email/i), "invalid@email");
        userEvent.click(screen.getByRole("button", { name: /send email/i }));

        expect(await screen.findByText(/must be a valid email/i)).toBeInTheDocument();
    });

    it("should return error on invalid email", async () => {
        render(<FormForgotPassword />);

        await userEvent.type(screen.getByPlaceholderText(/email/i), "false@email.com");
        userEvent.click(screen.getByRole("button", { name: /send email/i }));

        expect(await screen.findByText(/this email does not exist/i)).toBeInTheDocument();
    });

    it("should autofill if comes via logged user", () => {
        query = { email: "valid@email.com" };
        render(<FormForgotPassword />);

        expect(screen.getByPlaceholderText(/email/i)).toHaveValue("valid@email.com");
    });
});
