import GameItem from "components/GameItem";
import * as S from "./styles";
import { CartListProps } from "./types";
import Button from "components/Button";
import Link from "next/link";

const CartList = ({ items, total, hasButton = false }: CartListProps) => (
    <S.Wrapper>
        {items.map((item, index) => (
            <GameItem key={`CartItem-${index}`} {...item} />
        ))}

        <S.Footer>
            {!hasButton && <span>Total:</span>}
            <S.Total>{total}</S.Total>
            {hasButton && (
                <Link href="/cart">
                    <Button>Buy it now</Button>
                </Link>
            )}
        </S.Footer>
    </S.Wrapper>
);

export default CartList;
