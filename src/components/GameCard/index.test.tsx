import { fireEvent, screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";
import GameCard from ".";
import theme from "../../styles/theme";

const props = {
    title: "Population Zero",
    developer: "Rockstar Games",
    img: "https://source.unsplash.com/user/willianjusten/300x140",
    price: "R$ 235,00",
};

describe("<GameCard />", () => {
    it("should render correctly", () => {
        renderWithTheme(<GameCard {...props} />);

        // verificar title, developer, imagem, preço
        expect(screen.getByRole("img", { name: props.title })).toHaveAttribute(
            "src",
            props.img,
        );

        expect(screen.getByRole("heading", { name: props.title })).toBeInTheDocument();
        expect(
            screen.getByRole("heading", { name: props.developer }),
        ).toBeInTheDocument();

        expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();
    });

    it("should render price", () => {
        renderWithTheme(<GameCard {...props} />);

        const price = screen.getByText(props.price);
        //price withotu line-through
        expect(price).not.toHaveStyle({ textDecoration: "line-through" });
        // price with secondary background
        expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary });
    });

    it("should render promotional price", () => {
        renderWithTheme(<GameCard {...props} promotionalPrice="R$ 200,00" />);

        const price = screen.getByText(props.price);
        expect(price).toHaveStyle({ textDecoration: "line-through" });

        expect(screen.getByText("R$ 200,00")).not.toHaveStyle({
            textDecoration: "line-through",
        });

        expect(screen.getByText("R$ 200,00")).toHaveStyle({
            backgroundColor: theme.colors.secondary,
        });
    });

    it("should render icon fulfilled when favorite is true", () => {
        renderWithTheme(<GameCard {...props} isFavorite />);

        expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
    });

    it("should call onFav method when favorite is clicked", () => {
        const onFav = jest.fn();
        renderWithTheme(<GameCard {...props} isFavorite onFav={onFav} />);

        fireEvent.click(screen.getAllByRole("button")[0]);

        expect(onFav).toBeCalled();
    });

    it("should be render with ribbon", () => {
        renderWithTheme(
            <GameCard
                {...props}
                ribbon="My Ribbon"
                ribbonColor="secondary"
                ribbonSize="small"
            />,
        );

        const ribbon = screen.getByText(/My Ribbon/i);

        expect(ribbon).toHaveStyle({ backgroundColor: theme.colors.secondary });
        expect(ribbon).toHaveStyle({ height: "2.6rem", fontSize: "1.2rem" });
        expect(ribbon).toBeInTheDocument();
    });
});
