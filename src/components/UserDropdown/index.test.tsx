import { fireEvent, screen } from "@testing-library/react";

import UserDropdown from ".";
import { renderWithTheme } from "utils/tests/helpers";

describe("<UserDropdown />", () => {
    it("should render the username", () => {
        renderWithTheme(<UserDropdown username="username" />);

        expect(screen.getByText("username")).toBeInTheDocument();
    });

    it("should render the menu", () => {
        renderWithTheme(<UserDropdown username="username" />);
        const title = screen.getByText("username");

        fireEvent.click(title);
        expect(screen.getAllByRole("link")).toHaveLength(3);
    });
});
