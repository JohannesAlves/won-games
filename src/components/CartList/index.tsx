import GameItem from "components/GameItem";
import * as S from "./styles";
import { CartListProps } from "./types";

const CartList = ({ items, total }: CartListProps) => (
    <S.Wrapper>
        {items.map((item, index) => (
            <GameItem key={`CartItem-${index}`} {...item} />
        ))}

        <S.Footer>
            Total <S.Total>{total}</S.Total>
        </S.Footer>
    </S.Wrapper>
);

export default CartList;
