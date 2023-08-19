import * as S from "./styles";

import { CartProps } from "./types";

import Base from "templates/Base";
import { Container } from "components/Container";
import Heading from "components/Heading";
import { Divider } from "components/Divider";
import CartList from "components/CartList";
import PaymentOptions from "components/PaymentOptions";
import Empty from "components/Empty";

const Cart = ({ items, total, cards }: CartProps) => {
    const handlePayment = () => ({});

    return (
        <Base>
            <Container>
                <Heading lineLeft lineColor="secondary" color="white">
                    My Cart
                </Heading>

                {items.length ? (
                    <S.Content>
                        <CartList items={items} total={total} />

                        <PaymentOptions handlePayment={handlePayment} cards={cards} />
                    </S.Content>
                ) : (
                    <Empty
                        title="Your cart is empty"
                        description="Go back to the store and explore great games and offers"
                        hasLink
                    />
                )}

                <Divider />
            </Container>
        </Base>
    );
};

export default Cart;
