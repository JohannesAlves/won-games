import { screen } from "utils/test-utils";

import FormSignIn from ".";
import { render } from "utils/test-utils";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require("next/router"), "useRouter");
const push = jest.fn();

useRouter.mockImplementation(() => ({
    push,
    query: "",
    asPath: "",
    route: "/",
}));

describe("<FormSignIn />", () => {
    it("should render the forgot password link", () => {
        render(<FormSignIn />);

        expect(screen.getByText(/Forgot your password?/i)).toHaveAttribute(
            "href",
            "/forgot-password",
        );
    });
});
