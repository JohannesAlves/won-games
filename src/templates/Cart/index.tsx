import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { Container } from "components/Container";
import { Divider } from "components/Divider";
import CartList from "components/CartList";
import Heading from "components/Heading";
import Base from "templates/Base";
import { Info } from "@styled-icons/material-outlined/Info";

import * as S from "./styles";
import { GameCardProps } from "components/GameCard/types";
import { HighlightProps } from "components/Highlight/types";
import { CartListProps } from "components/CartList/types";
import ShowCase from "components/ShowCase";
import PaymentForm from "components/PaymentForm";
import { Session } from "next-auth";

export type CartProps = {
    session: Session;
    recommendedTitle: string;
    recommendedGames: GameCardProps[];
    recommendedHighlight: HighlightProps;
} & CartListProps;

const stripe = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`);

const Cart = ({
    session,
    recommendedTitle,
    recommendedGames,
    recommendedHighlight,
}: CartProps) => {
    return (
        <Base>
            <Container>
                <Heading lineLeft lineColor="primary" color="white">
                    My cart
                </Heading>

                <S.Content>
                    <CartList />

                    <Elements stripe={stripe}>
                        <PaymentForm session={session} />
                    </Elements>
                </S.Content>

                <S.Text>
                    <Info size={18} /> Your purchase is protected by a secure connection
                    from the WON platform. By purchasing from our store you agree and
                    agree to our <a href="#">terms of use.</a> After making the purchase
                    you are entitled to a refund within a maximum of 30 days, without any
                    additional cost, as long as the download of the purchased game has not
                    occurred after your purchase.
                </S.Text>
                <Divider />
            </Container>

            <ShowCase
                title={recommendedTitle}
                games={recommendedGames}
                highlight={recommendedHighlight}
            />
        </Base>
    );
};

export default Cart;
