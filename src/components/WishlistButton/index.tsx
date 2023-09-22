import Button from "components/Button";
import { WishlistButtonProps } from "./types";
import { Favorite, FavoriteBorder } from "styled-icons/material-outlined";
import { useWishlist } from "hooks/useWishlist";
import { useSession } from "next-auth/react";

const WishlistButton = ({ id, hasText, size = "small" }: WishlistButtonProps) => {
    const { data: session } = useSession();
    const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();

    const handleClick = () => {
        isInWishlist(id) ? removeFromWishlist(id) : addToWishlist(id);
    };

    const ButtonText = isInWishlist(id) ? "Remove from Wishlist" : "Add to Wishlist";

    if (!session) return null;

    return (
        <Button
            icon={
                isInWishlist(id) ? (
                    <Favorite aria-label={ButtonText} />
                ) : (
                    <FavoriteBorder aria-label={ButtonText} />
                )
            }
            minimal
            size={size}
            onClick={handleClick}
        >
            {hasText && ButtonText}
        </Button>
    );
};
export default WishlistButton;
