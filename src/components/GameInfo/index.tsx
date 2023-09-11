import { AddShoppingCart, FavoriteBorder } from "@styled-icons/material-outlined";

import Button from "components/Button";
import Heading from "components/Heading";
import Ribbon from "components/Ribbon";

import * as S from "./styles";
import { GameInfoProps } from "./types";
import formatPrice from "utils/formatPrice";
import CartButton from "components/CartButton";

const GameInfo = ({ id, title, description, price }: GameInfoProps) => (
    <S.Wrapper>
        <Heading color="black" lineBottom>
            {title}
        </Heading>

        <Ribbon color="secondary">{`${formatPrice(price)}`}</Ribbon>

        <S.Description>{description}</S.Description>

        <S.ButtonsWrapper>
            <CartButton id={id} size="large" hasText />
            <Button icon={<FavoriteBorder />} size="large" minimal>
                Wishlist
            </Button>
        </S.ButtonsWrapper>
    </S.Wrapper>
);

export default GameInfo;
