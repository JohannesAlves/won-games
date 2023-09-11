import { screen } from "utils/test-utils";
import { render } from "utils/test-utils";
import "jest-styled-components";

import Heading from ".";

describe("<Heading />", () => {
    it("should be render a black heading by default", () => {
        render(<Heading>Won Games</Heading>);
        expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyle({
            color: "#030517",
        });
    });

    it("should be render a white heading when user pass prop color", () => {
        render(<Heading color="white">Won Games</Heading>);
        expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyle({
            color: "#FAFAFA",
        });
    });

    it("should be render a heading with line in left side", () => {
        render(<Heading lineLeft={true}>Won Games</Heading>);
        expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyle({
            "border-left": "0.7rem solid #F231A5",
        });
    });

    it("should be render a heading with line in bottom", () => {
        render(<Heading lineBottom={true}>Won Games</Heading>);
        expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyleRule(
            "border-bottom",
            "0.5rem solid #F231A5",
            { modifier: "::after" },
        );
    });

    it("should be render a heading with small size", () => {
        render(<Heading size="small">Won Games</Heading>);
        expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyle({
            "font-size": "1.6rem",
        });

        expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyleRule(
            "width",
            "3rem",
            { modifier: "::after" },
        );
    });

    it("should render a Heading with a secondary line color", () => {
        render(
            <Heading lineColor="secondary" lineLeft lineBottom>
                Lorem Ipsum
            </Heading>,
        );

        const heading = screen.getByRole("heading", { name: /lorem ipsum/i });
        expect(heading).toHaveStyle({ "border-left": "0.7rem solid #3CD3C1" });
        expect(heading).toHaveStyleRule("border-bottom", "0.5rem solid #3CD3C1", {
            modifier: "::after",
        });
    });
});
