import "../../../.jest/server.mock";
import { signIn } from "next-auth/react";
import { render, screen, waitFor } from "utils/test-utils";
import userEvent from "@testing-library/user-event";

import FormResetPassword from ".";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require("next/router"), "useRouter");
let query = {};

useRouter.mockImplementation(() => ({
    query,
}));

jest.mock("next-auth/react", () => ({
    signIn: jest.fn(),
}));

describe("<FormResetPassword />", () => {
    it("should show validation errors", async () => {
        render(<FormResetPassword />);

        await userEvent.type(screen.getByPlaceholderText("Password"), "password");
        await userEvent.type(screen.getByPlaceholderText(/confirm/i), "wrongConfirm");

        userEvent.click(screen.getByRole("button", { name: /reset password/i }));

        expect(
            await screen.findByText(/confirm password does not match/i),
        ).toBeInTheDocument();
    });

    it("should show error when code provided is wrong", async () => {
        query = { code: "wrong_code" };
        render(<FormResetPassword />);

        await userEvent.type(screen.getByPlaceholderText("Password"), "password");
        await userEvent.type(screen.getByPlaceholderText(/confirm/i), "password");
        userEvent.click(screen.getByRole("button", { name: /reset password/i }));

        expect(await screen.findByText("Incorrect code provided.")).toBeInTheDocument();
    });

    it("should reset password when signIn() is ok", async () => {
        query = { code: "right_code" };
        render(<FormResetPassword />);

        await userEvent.type(screen.getByPlaceholderText("Password"), "password");
        await userEvent.type(screen.getByPlaceholderText(/confirm/i), "password");
        userEvent.click(screen.getByRole("button", { name: /reset password/i }));

        await waitFor(() => {
            expect(signIn).toHaveBeenCalledWith("credentials", {
                email: "valid@email.com",
                password: "password",
                callbackUrl: "/",
            });
        });
    });
});
