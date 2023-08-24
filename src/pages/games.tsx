import filterItemsMock from "components/ExploreSidebar/mock";
import GamesTemplate from "templates/Games";
import { GamesTemplateProps } from "templates/Games/types";

import { initializeApollo } from "utils/apollo";
import { QUERY_GAMES } from "graphql/queries/games";
import { QueryGames, QueryGamesVariables } from "graphql/generated/QueryGames";

export default function GamesPage(props: GamesTemplateProps) {
    return <GamesTemplate {...props} />;
}

export async function getStaticProps() {
    const apolloClient = initializeApollo();

    await apolloClient.query<QueryGames, QueryGamesVariables>({
        query: QUERY_GAMES,
        variables: { limit: 9 },
    });

    return {
        props: {
            revalidate: 60, //seconds
            initialApolloState: apolloClient.cache.extract(),
            filterItems: filterItemsMock,
        },
    };
}
