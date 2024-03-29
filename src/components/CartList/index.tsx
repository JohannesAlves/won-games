import GameItem from "components/GameItem";
import * as S from "./styles";
import { CartListProps } from "./types";
import Button from "components/Button";
import Link from "next/link";
import Empty from "components/Empty";
import { useCart } from "hooks/useCart";

const CartList = ({ hasButton = false }: CartListProps) => {
    const { items, total } = useCart();

    return (
        <S.Wrapper isEmpty={!items.length} data-cy="cart-list">
            {items?.length ? (
                <>
                    <S.GamesList>
                        {items.map((item, index) => (
                            <GameItem key={`CartItem-${index}`} {...item} />
                        ))}
                    </S.GamesList>
                    <S.Footer>
                        {!hasButton && <span>Total:</span>}
                        <S.Total>{total}</S.Total>
                        {hasButton && (
                            <Link href="/cart">
                                <Button>Buy it now</Button>
                            </Link>
                        )}
                    </S.Footer>
                </>
            ) : (
                <Empty
                    title="Your cart is empty"
                    description="Go back to the store and explore great games and offers"
                    hasLink
                />
            )}
        </S.Wrapper>
    );
};

export default CartList;
