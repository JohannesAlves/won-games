import NextNProgress from "nextjs-progressbar";

import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { SessionProvider } from "next-auth/react";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";

import Head from "next/head";

import GlobalStyles from "styles/global";
import theme from "styles/theme";

import { useApollo } from "utils/apollo";
import { CartProvider } from "hooks/useCart";

import type { AppProps } from "next/app";
import { WishlistProvider } from "hooks/useWishlist";

function App({ Component, pageProps }: AppProps) {
    const client = useApollo(pageProps.initialApoloState);

    return (
        <SessionProvider session={pageProps.session}>
            <ApolloProvider client={client}>
                <ThemeProvider theme={theme}>
                    <CartProvider>
                        <WishlistProvider>
                            {" "}
                            <Head>
                                <title>React Avançado - Boilerplate</title>
                                <link rel="shortchurt icon" href="/img/favicon.ico" />
                                <link rel="apple-touch-icon" href="/img/favicon.ico" />
                                <link rel="manifest" href="/manifest.json" />
                                <meta
                                    name="description"
                                    content="The best Game Store in the world!"
                                />
                            </Head>
                            <DefaultSeo {...SEO} />
                            <GlobalStyles />
                            <NextNProgress
                                color="#F231A5"
                                startPosition={0.3}
                                stopDelayMs={200}
                                height={2}
                                showOnShallow={true}
                            />
                            <Component {...pageProps} />
                        </WishlistProvider>
                    </CartProvider>
                </ThemeProvider>
            </ApolloProvider>
        </SessionProvider>
    );
}

export default App;
