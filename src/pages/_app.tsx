import NextNProgress from "nextjs-progressbar";

import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";

import Head from "next/head";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "styles/global";
import theme from "styles/theme";
import { useApollo } from "utils/apollo";
import { CartProvider } from "hooks/useCart";

function App({ Component, pageProps }: AppProps) {
    const client = useApollo(pageProps.initialApoloState);

    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <CartProvider>
                    <Head>
                        <title>React Avançado - Boilerplate</title>
                        <link rel="shortchurt icon" href="/img/favicon.ico" />
                        <link rel="apple-touch-icon" href="/img/favicon.ico" />
                        <link rel="manifest" href="/manifest.json" />
                        <meta
                            name="description"
                            content="A simple project starters to work with ts, react, next js & styled components"
                        />
                    </Head>

                    <GlobalStyles />
                    <NextNProgress
                        color="#F231A5"
                        startPosition={0.3}
                        stopDelayMs={200}
                        height={2}
                        showOnShallow={true}
                    />
                    <Component {...pageProps} />
                </CartProvider>
            </ThemeProvider>
        </ApolloProvider>
    );
}

export default App;
