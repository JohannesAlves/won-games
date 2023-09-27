import Button from "components/Button";
import { AddShoppingCart, RemoveShoppingCart } from "styled-icons/material-outlined";
import { CartButtonProps } from "./types";
import { useCart } from "hooks/useCart";

const CartButton = ({ id, hasText = false, size = "small" }: CartButtonProps) => {
    const { isInCart, addToCart, removeFromCart } = useCart();
    const ButtonText = isInCart(id) ? "Remove from cart" : "Add to cart";

    return (
        <Button
            icon={isInCart(id) ? <RemoveShoppingCart /> : <AddShoppingCart />}
            size={size}
            onClick={() => (isInCart(id) ? removeFromCart(id) : addToCart(id))}
            aria-label={ButtonText}
        >
            {hasText && ButtonText}
        </Button>
    );
};

export default CartButton;
