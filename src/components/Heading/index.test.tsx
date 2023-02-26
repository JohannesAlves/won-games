import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";
import "jest-styled-components";

import Heading from ".";

describe("<Heading />", () => {
    it("should be render a black heading by default", () => {
        renderWithTheme(<Heading>Won Games</Heading>);
        expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyle({
            color: "#030517",
        });
    });

    it("should be render a white heading when user pass prop color", () => {
        renderWithTheme(<Heading color="white">Won Games</Heading>);
        expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyle({
            color: "#FAFAFA",
        });
    });

    it("should be render a heading with line in left side", () => {
        renderWithTheme(<Heading lineLeft={true}>Won Games</Heading>);
        expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyle({
            "border-left": "0.7rem solid #3CD3C1",
        });
    });

    it("should be render a heading with line in bottom", () => {
        renderWithTheme(<Heading lineBottom={true}>Won Games</Heading>);
        expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyleRule(
            "border-bottom",
            "0.5rem solid #F231A5",
            { modifier: "::after" },
        );
    });
});
