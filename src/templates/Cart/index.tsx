import * as S from "./styles";

import { CartProps } from "./types";

import Base from "templates/Base";
import { Container } from "components/Container";
import Heading from "components/Heading";
import { Divider } from "components/Divider";
import CartList from "components/CartList";
import PaymentOptions from "components/PaymentOptions";

const Cart = ({ cards }: CartProps) => {
    const handlePayment = () => ({});

    return (
        <Base>
            <Container>
                <Heading lineLeft lineColor="secondary" color="white">
                    My Cart
                </Heading>
                <S.Content>
                    <CartList />

                    <PaymentOptions handlePayment={handlePayment} cards={cards} />
                </S.Content>
                <Divider />
            </Container>
        </Base>
    );
};

export default Cart;
