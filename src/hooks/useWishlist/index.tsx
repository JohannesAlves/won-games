import { createContext, useContext, useEffect, useState } from "react";
import { WishlistContextData, WishlistProviderProps } from "./types";
import { useQueryWishlist } from "graphql/queries/wishlist";
import { useSession } from "next-auth/react";
import { gamesMapper } from "utils/mappers";
import { QueryWishlist_wishlists_games } from "graphql/generated/QueryWishlist";

export const WishlistContextDefaultValues: WishlistContextData = {
    items: [],
    isInWishlist: () => false,
    addToWishlist: () => null,
    removeFromWishlist: () => null,
    status: "loading",
    loading: false,
};

export const WishlistContext = createContext<WishlistContextData>(
    WishlistContextDefaultValues,
);

const WishlistProvider = ({ children }: WishlistProviderProps) => {
    const [session] = useSession();
    const [wishlistItems, setWishlistItems] = useState<QueryWishlist_wishlists_games[]>(
        [],
    );
    const isInWishlist = (id: string) => false;
    const addToWishlist = (id: string) => {};
    const removeFromWishlist = (id: string) => {};

    const { data, loading } = useQueryWishlist({
        skip: !session?.user?.email,
        context: { session },
        variables: {
            identifier: session?.user?.email as string,
        },
    });

    useEffect(() => {
        setWishlistItems(data?.wishlists[0]?.games || []);
    }, [data]);

    return (
        <WishlistContext.Provider
            value={{
                items: gamesMapper(wishlistItems),
                isInWishlist,
                addToWishlist,
                removeFromWishlist,
                loading,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
