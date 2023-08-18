import Heading from "components/Heading";
import * as S from "./styles";
import { PaymentOptionsProps } from "./types";
import Radio from "components/Radio";
import { Add, ShoppingCart } from "styled-icons/material-outlined";
import Button from "components/Button";
import { useState } from "react";

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => {
    const [checked, setChecked] = useState(false);

    return (
        <S.Wrapper>
            <S.Body>
                <Heading lineBottom lineColor="primary" size="small">
                    Payment
                </Heading>

                <S.CardsList>
                    {cards?.map(card => (
                        <S.CardItem key={card.number}>
                            <S.CardInfo>
                                <img src={card.img} alt={card.flag} />
                                {card.number}
                            </S.CardInfo>
                            <Radio
                                name="credit-card"
                                id={card.number}
                                value={card.number}
                                onCheck={() => setChecked(true)}
                            />
                        </S.CardItem>
                    ))}

                    <S.AddCard role="button">
                        <Add size={20} /> Add a new credit card
                    </S.AddCard>
                </S.CardsList>
            </S.Body>
            <S.Footer>
                <Button as="a" minimal fullWidth>
                    Continue Shopping
                </Button>
                <Button
                    fullWidth
                    icon={<ShoppingCart />}
                    onClick={handlePayment}
                    disabled={!checked}
                >
                    Buy now
                </Button>
            </S.Footer>
        </S.Wrapper>
    );
};

export default PaymentOptions;
