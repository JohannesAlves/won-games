import * as S from "./styles";

import { CartDropdownProps } from "./types";

import Dropdown from "components/Dropdown";
import CartIcon from "components/CartIcon";
import CartList from "components/CartList";

const CartDropdown = ({ items, total }: CartDropdownProps) => (
    <S.Wrapper>
        <Dropdown title={<CartIcon quantity={items.length} />}>
            <CartList items={items} total={total} hasButton />
        </Dropdown>
    </S.Wrapper>
);

export default CartDropdown;
