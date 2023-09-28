import "@testing-library/jest-dom";
import { RenderOptions, render } from "@testing-library/react";

import { WishlistContext, WishlistContextDefaultValues } from "hooks/useWishlist";
import { WishlistContextData } from "hooks/useWishlist/types";
import { CartContext, CartContextDefaultValues } from "hooks/useCart";
import { CartContextData } from "hooks/useCart/types";

import { ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import { SessionProvider } from "next-auth/react";

type CustomRenderProps = {
    cartProviderProps?: CartContextData;
    wishlistProviderProps?: WishlistContextData;
} & Omit<RenderOptions, "queries">;

const customRender = (
    ui: ReactElement,
    {
        cartProviderProps = CartContextDefaultValues,
        wishlistProviderProps = WishlistContextDefaultValues,
        ...renderOptions
    }: CustomRenderProps = {},
) =>
    render(
        <ThemeProvider theme={theme}>
            <CartContext.Provider value={cartProviderProps}>
                <WishlistContext.Provider value={wishlistProviderProps}>
                    {ui}
                </WishlistContext.Provider>
            </CartContext.Provider>
        </ThemeProvider>,
        renderOptions,
    );

export * from "@testing-library/react";
export { customRender as render };
