import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import ProfileMenu from ".";
import theme from "styles/theme";

describe("<ProfileMenu />", () => {
    it("should render the menu", () => {
        const { container } = renderWithTheme(<ProfileMenu />);

        expect(screen.getAllByRole("link")).toHaveLength(4);
        expect(container.firstChild).toMatchSnapshot();
    });

    it("should render the menu with an active link defined", () => {
        renderWithTheme(<ProfileMenu activeLink="/profile/cards" />);

        expect(screen.getByRole("link", { name: /my cards/i })).toHaveStyle({
            background: theme.colors.primary,
            color: theme.colors.white,
        });
    });
});
