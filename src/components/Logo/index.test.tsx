import { screen } from "utils/test-utils";
import { render } from "utils/test-utils";
import "jest-styled-components";

import Logo from ".";

describe("<Logo />", () => {
    it("should be render a white label by default", () => {
        render(<Logo />);
        expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
            color: "#FAFAFA",
        });
    });

    it("should be render a black label when color is passed", () => {
        render(<Logo color="black" />);
        expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
            color: "#030517",
        });
    });

    it("should be render a normal Logo when size is default", () => {
        render(<Logo />);
        expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
            width: "11rem",
        });
    });

    it("should be render a bigger Logo", () => {
        render(<Logo size="large" />);
        expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
            width: "20rem",
        });
    });

    it("should be render a bigger Logo without text on mobile", () => {
        render(<Logo hiddeOnMobile />);
        expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
            "width",
            "5.8rem",
            {
                media: "(max-width: 768px)",
            },
        );
    });
});
