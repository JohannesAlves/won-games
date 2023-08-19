import { screen } from "@testing-library/react";

import FormProfile from ".";
import { renderWithTheme } from "utils/tests/helpers";

describe("<FormProfile />", () => {
    it("should render the profile form", () => {
        renderWithTheme(<FormProfile />);

        expect(screen.getByRole("heading", { name: /my profile/i })).toBeInTheDocument();
        expect(screen.getAllByRole("textbox")).toHaveLength(2);
        expect(screen.getByPlaceholderText("Type your password")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("New password")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /save/i })).toBeInTheDocument();
    });
});
