import "../../../.jest/match-media-mock";
import { screen } from "utils/test-utils";
import Slider from ".";
import { render } from "utils/test-utils";

describe("<Slider />", () => {
    it("should be render children as slider item", () => {
        const { container } = render(
            <Slider settings={{ slidesToShow: 1, infinite: false }}>
                <p>item 1</p>
                <p>item 2</p>
            </Slider>,
        );

        expect(screen.getByText(/item 1/i).parentElement?.parentElement).toHaveClass(
            "slick-slide",
        );

        expect(screen.getByText(/item 2/i).parentElement?.parentElement).toHaveClass(
            "slick-slide",
        );

        expect(container.firstChild).toMatchSnapshot();
    });
});
