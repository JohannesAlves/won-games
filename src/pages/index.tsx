import Home from "templates/Home";

import { HomeTemplateProps } from "templates/Home/types";

import { initializeApollo } from "utils/apollo";
import { QUERY_HOME } from "graphql/queries/home";
import { QueryHome, QueryHomeVariables } from "graphql/generated/QueryHome";
import { bannerMapper, gamesMapper, highlightMapper } from "utils/mappers";

export default function Index(props: HomeTemplateProps) {
    return <Home {...props} />;
}

export async function getStaticProps() {
    const apolloClient = initializeApollo();
    const TODAY = new Date().toISOString().slice(0, 10);

    const {
        data: { banners, newGames, upcomingGames, freeGames, sections },
    } = await apolloClient.query<QueryHome, QueryHomeVariables>({
        query: QUERY_HOME,
        variables: { date: TODAY },
    });

    return {
        props: {
            revalidate: 60, // seconds
            banners: bannerMapper(banners),
            newGamesTitle: sections?.newGames?.title,
            newGames: gamesMapper(newGames),
            mostPopularGamesTitle: sections?.popularGames?.title,
            mostPopularHighlight: highlightMapper(sections?.popularGames?.highlight),
            mostPopularGames: gamesMapper(sections?.popularGames?.games),

            upcomingGamesTitle: sections?.upcomingGames?.title,
            upcommingGames: gamesMapper(upcomingGames),
            upcommingHighlight: highlightMapper(sections?.upcomingGames?.highlight),
            freeGamesTitle: sections?.freeGames?.title,
            freeGames: gamesMapper(freeGames),
            freeHighlight: highlightMapper(sections?.freeGames?.highlight),
        },
    };
}
