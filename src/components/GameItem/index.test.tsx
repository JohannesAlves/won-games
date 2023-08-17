import { screen } from "@testing-library/react";

import GameItem from ".";
import { renderWithTheme } from "utils/tests/helpers";

const props = {
    title: "title",
    img: "https://source.unsplash.com/user/willianjusten/151x70",
    price: "R$ 215,00",
};

describe("<GameItem />", () => {
    it("should render the item", () => {
        renderWithTheme(<GameItem {...props} />);

        expect(screen.getByText(/title/i)).toBeInTheDocument();
        expect(screen.getByRole("img", { name: props.title })).toBeInTheDocument();
        expect(screen.getByText("R$ 215,00")).toBeInTheDocument();
    });

    it("should render item with download link", () => {
        const downloadLink = "http://link";

        renderWithTheme(<GameItem {...props} downloadLink={downloadLink} />);

        expect(
            screen.getByRole("link", { name: `Get ${props.title} here` }),
        ).toHaveAttribute("href", downloadLink);
    });

    it("should render payment info", () => {
        const paymentInfo = {
            flag: "mastercard",
            img: "/img/master-card.png",
            number: "**** **** **** 4326",
            purchaseDate: "Purchase made on 07/20/2020 at 20:32",
        };

        renderWithTheme(<GameItem {...props} paymentInfo={paymentInfo} />);

        expect(screen.getByRole("img", { name: paymentInfo.flag })).toHaveAttribute(
            "src",
            paymentInfo.img,
        );

        expect(screen.getByText(paymentInfo.number)).toBeInTheDocument();
        expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument();
    });
});
