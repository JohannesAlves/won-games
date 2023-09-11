import "../../../.jest/match-media-mock";
import { screen } from "utils/test-utils";
import { render } from "utils/test-utils";

import GameCardSlider from ".";

const items = [
    {
        title: "Population Zero",
        developer: "Rockstar Games",
        image: "https://source.unsplash.com/user/willianjusten/300x140",
        price: "R$ 235,00",
        promotionalPrice: "R$ 215,00",
    },
    {
        title: "Population Zero",
        developer: "Rockstar Games",
        image: "https://source.unsplash.com/user/willianjusten/300x141",
        price: "R$ 235,00",
        promotionalPrice: "R$ 215,00",
    },
    {
        title: "Population Zero",
        developer: "Rockstar Games",
        image: "https://source.unsplash.com/user/willianjusten/300x142",
        price: "R$ 235,00",
        promotionalPrice: "R$ 215,00",
    },
    {
        title: "Population Zero",
        developer: "Rockstar Games",
        image: "https://source.unsplash.com/user/willianjusten/300x143",
        price: "R$ 235,00",
        promotionalPrice: "R$ 215,00",
    },
    {
        title: "Population Zero",
        developer: "Rockstar Games",
        image: "https://source.unsplash.com/user/willianjusten/300x144",
        price: "R$ 235,00",
        promotionalPrice: "R$ 215,00",
    },
];

describe("<GameSlider />", () => {
    it("should render with 4 active items", () => {
        const { container } = render(<GameCardSlider items={items} />);
        expect(container.querySelectorAll(".slick-active")).toHaveLength(4);
    });

    it("should render white arrows if color passed", () => {
        render(<GameCardSlider items={items} color="white" />);

        expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
            color: "#FAFAFA",
        });
        expect(screen.getByLabelText(/next games/i)).toHaveStyle({
            color: "#FAFAFA",
        });
    });
});
