import Button from "components/Button";
import { AddShoppingCart, RemoveShoppingCart } from "styled-icons/material-outlined";
import { CartButtonProps } from "./types";
import { useCart } from "hooks/useCart";

const CartButton = ({ id }: CartButtonProps) => {
    const { isInCart, addToCart, removeFromCart } = useCart();

    return (
        <Button
            icon={
                !isInCart(id) ? (
                    <AddShoppingCart aria-label="add to cart" />
                ) : (
                    <RemoveShoppingCart aria-label="remove from cart" />
                )
            }
            size="small"
            onClick={() => (isInCart(id) ? removeFromCart(id) : addToCart(id))}
        />
    );
};

export default CartButton;
