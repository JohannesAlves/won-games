import "../.jest/next-image.mock";
import GlobalStyles from "styles/global";
import { ThemeProvider } from "styled-components";
import { CartContext, CartContextDefaultValues } from "hooks/useCart";
import theme from "styles/theme";

export const parameters = {
    backgrounds: {
        default: "won-light",
        values: [
            {
                name: "won-light",
                value: theme.colors.white,
            },
            {
                name: "won-dark",
                value: theme.colors.mainBg,
            },
        ],
    },
};

export const decorators = [
    (Story, context) => {
        return (
            <ThemeProvider theme={theme}>
                <CartContext.Provider
                    value={{
                        ...CartContextDefaultValues,
                        ...(context?.args?.cartContextValue || {}),
                        ...context.args,
                    }}
                >
                    <GlobalStyles removeBg />
                    <Story />
                </CartContext.Provider>
            </ThemeProvider>
        );
    },
];
