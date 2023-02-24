import type { AppProps } from "next/app";
import Head from "next/head";

import GlobalStyles from "styles/global";

function App({ Component, pageProps }: AppProps) {
    return (
        <>
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
        </>
    );
}

export default App;
