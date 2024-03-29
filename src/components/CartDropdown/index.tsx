import * as S from "./styles";

import Dropdown from "components/Dropdown";
import CartIcon from "components/CartIcon";
import CartList from "components/CartList";

const CartDropdown = () => (
    <S.Wrapper>
        <Dropdown title={<CartIcon />}>
            <CartList hasButton />
        </Dropdown>
    </S.Wrapper>
);

export default CartDropdown;
