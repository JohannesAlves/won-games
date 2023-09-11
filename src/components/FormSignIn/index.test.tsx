import { screen } from "utils/test-utils";

import FormSignIn from ".";
import { render } from "utils/test-utils";

describe("<FormSignIn />", () => {
    it("should render the forgot password link", () => {
        render(<FormSignIn />);

        expect(screen.getByText(/Forgot your password?/i)).toHaveAttribute("href", "#");
    });
});
