import { screen } from "utils/test-utils";
import { render } from "utils/test-utils";

import FormSignUp from ".";

describe("<FormSignUp />", () => {
    it("should render text and link to sign in", () => {
        render(<FormSignUp />);

        expect(screen.getByRole("link", { name: /sign in/i })).toBeInTheDocument();
        expect(screen.getByText(/already have an account\?/i)).toBeInTheDocument();
    });
});
