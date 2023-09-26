export type CartItem = {
    id: string;
    img: string;
    title: string;
    price: string;
};

export type CartContextData = {
    items: CartItem[];
    quantity: number;
    total: string;
    isInCart: (id: string) => boolean;
    addToCart: (id: string) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    loading: boolean;
};

export type CartProviderProps = {
    children: React.ReactNode;
};
