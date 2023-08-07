import { screen } from "@testing-library/react";

import GameDetails from ".";
import { renderWithTheme } from "utils/tests/helpers";
import { GameDetailsProps } from "./types";

const props: GameDetailsProps = {
    developer: "Different Tales",
    platforms: ["windows", "mac", "linux"],
    releaseDate: "2020-11-21T23:00:00",
    rating: "BR0",
    genres: ["Action", "RPG"],
};

describe("<GameDetails />", () => {
    it("should render blocks", () => {
        renderWithTheme(<GameDetails {...props} />);

        expect(screen.getByRole("heading", { name: /developer/i })).toBeInTheDocument();
    });

    it("should render platform icons", () => {
        renderWithTheme(<GameDetails {...props} />);

        expect(screen.getByRole("img", { name: /windows/i })).toBeInTheDocument();
    });

    it("should render the formated date", () => {
        renderWithTheme(<GameDetails {...props} />);

        expect(screen.getByText("Nov 21, 2020")).toBeInTheDocument();
    });

    it("should render a list of genres", () => {
        renderWithTheme(<GameDetails {...props} />);

        expect(screen.getByText("Action / RPG")).toBeInTheDocument();
    });

    it("should render free rating when is BR0", () => {
        renderWithTheme(<GameDetails {...props} />);

        expect(screen.getByText("FREE")).toBeInTheDocument();
    });

    it("should render 18+ rating when is BR18", () => {
        renderWithTheme(<GameDetails {...props} rating="BR18" />);

        expect(screen.getByText(/18+/i)).toBeInTheDocument();
    });
});
