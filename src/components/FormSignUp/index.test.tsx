import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import FormSignUp from ".";

describe("<FormSignUp />", () => {
    it("should render text and link to sign in", () => {
        renderWithTheme(<FormSignUp />);

        expect(screen.getByRole("link", { name: /sign in/i })).toBeInTheDocument();
        expect(screen.getByText(/already have an account\?/i)).toBeInTheDocument();
    });
});