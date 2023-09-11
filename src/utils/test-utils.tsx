import { RenderOptions, render } from "@testing-library/react";
import { CartContext, CartContextDefaultValues } from "hooks/useCart";
import { CartContextData } from "hooks/useCart/types";
import { ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";

type CustomRenderProps = {
    cartProviderProps?: CartContextData;
} & Omit<RenderOptions, "queries">;

const customRender = (
    ui: ReactElement,
    {
        cartProviderProps = CartContextDefaultValues,
        ...renderOptions
    }: CustomRenderProps = {},
) =>
    render(
        <ThemeProvider theme={theme}>
            <CartContext.Provider value={cartProviderProps}>{ui}</CartContext.Provider>
        </ThemeProvider>,
        renderOptions,
    );

export * from "@testing-library/react";
export { customRender as render };
