import Heading from "components/Heading";
import Ribbon from "components/Ribbon";

import * as S from "./styles";
import { GameInfoProps } from "./types";
import formatPrice from "utils/formatPrice";
import CartButton from "components/CartButton";
import WishlistButton from "components/WishlistButton";

const GameInfo = ({ id, title, description, price }: GameInfoProps) => (
    <S.Wrapper data-cy="game-info">
        <Heading color="black" lineBottom>
            {title}
        </Heading>

        <Ribbon color="secondary">{`${formatPrice(price)}`}</Ribbon>

        <S.Description>{description}</S.Description>

        <S.ButtonsWrapper>
            <CartButton id={id} size="large" hasText />
            <WishlistButton id={id} hasText size="large" />
        </S.ButtonsWrapper>
    </S.Wrapper>
);

export default GameInfo;
