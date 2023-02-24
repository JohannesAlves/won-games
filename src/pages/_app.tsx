import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "styles/global";
import theme from "styles/theme";

function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
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
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default App;
