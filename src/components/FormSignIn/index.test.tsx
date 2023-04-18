import { screen } from "@testing-library/react";

import FormSignIn from ".";
import { renderWithTheme } from "utils/tests/helpers";

describe("<FormSignIn />", () => {
    it("should render the forgot password link", () => {
        renderWithTheme(<FormSignIn />);

        expect(screen.getByText(/Forgot your password?/i)).toHaveAttribute("href", "#");
    });
});
