import { GameCardProps } from "components/GameCard/types";

export type WishlistContextData = {
    items: GameCardProps[] | undefined;
    isInWishlist: (id: string) => boolean;
    addToWishlist: (id: string) => void;
    removeFromWishlist: (id: string) => void;
    loading: boolean;
};

export type WishlistProviderProps = {
    children: React.ReactNode;
};
