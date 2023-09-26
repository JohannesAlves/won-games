import { CartItem } from "hooks/useCart/types";

type PaymentIntentParams = {
    token: string;
    items: CartItem[];
};

export const createPaymentIntent = async ({ items, token }: PaymentIntentParams) => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/orders/create-payment-intent`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ cart: items }),
        },
    );

    return await response.json();
};
