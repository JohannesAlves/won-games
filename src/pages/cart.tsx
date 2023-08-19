import Cart from "templates/Cart";
import mockGames from "components/GameCardSlider/mock";
import mockHighlight from "components/Highlight/mock";
import mockItems from "components/CartList/mock";
import mockCards from "components/PaymentOptions/mock";
import { CartProps } from "templates/Cart/types";

export default function CartPage(props: CartProps) {
    return <Cart {...props} />;
}

export async function getServerSideProps() {
    return {
        props: {
            items: mockItems,
            total: "R$ 330,00",
            cards: mockCards,
            recommendedGames: mockGames,
            recommendedHighlight: mockHighlight,
        },
    };
}
