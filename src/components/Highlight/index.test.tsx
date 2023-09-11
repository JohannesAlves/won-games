import { screen } from "utils/test-utils";
import Highlight from ".";
import * as S from "./styles";
import { render } from "utils/test-utils";

const props = {
    title: "Heading 1",
    subtitle: "Heading 2",
    buttonLabel: "Buy Now",
    buttonLink: "/rdr2",
    backgroundImage: "/img/red-dead-img.jpg",
};

describe("<Highlight />", () => {
    it("should be render headings and button", () => {
        render(<Highlight {...props} />);

        expect(screen.getByRole("heading", { name: /heading 1/i })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: /heading 2/i })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /buy now/i })).toBeInTheDocument();
    });

    it("should be render background image", () => {
        const { container } = render(<Highlight {...props} />);

        expect(container.firstChild).toHaveStyle({
            backgroundImage: `url(${props.backgroundImage})`,
        });
    });

    it("should be render float image", () => {
        render(<Highlight {...props} floatImage="/float-image.png" />);

        expect(screen.getByRole("img", { name: props.title })).toHaveAttribute(
            "src",
            "/float-image.png",
        );
    });

    it("should render align right by default", () => {
        const { container } = render(<Highlight {...props} />);

        expect(container.firstChild).toHaveStyleRule(
            "grid-template-areas",
            /"floatimage content"/i,
        );

        expect(container.firstChild).toHaveStyleRule("text-align", "right", {
            modifier: `${S.Content}`,
        });
    });

    it("should render align left", () => {
        const { container } = render(<Highlight {...props} alignment="left" />);

        expect(container.firstChild).toHaveStyleRule(
            "grid-template-areas",
            /"content floatimage"/i,
        );

        expect(container.firstChild).toHaveStyleRule("text-align", "left", {
            modifier: `${S.Content}`,
        });
    });
});
