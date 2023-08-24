import Base from "templates/Base";
import * as S from "./styles";
import { GamesTemplateProps } from "./types";
import ExploreSidebar from "components/ExploreSidebar";
import { Grid } from "components/Grid";
import GameCard from "components/GameCard";
import { KeyboardArrowDown } from "styled-icons/material-outlined";
import { useQuery } from "@apollo/client";
import { QueryGames, QueryGamesVariables } from "graphql/generated/QueryGames";
import { QUERY_GAMES } from "graphql/queries/games";

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
    const { data } = useQuery<QueryGames, QueryGamesVariables>(QUERY_GAMES, {
        variables: { limit: 15 },
    });

    return (
        <Base>
            <S.Main>
                <ExploreSidebar items={filterItems} onFilter={() => ({})} />

                <section>
                    <Grid>
                        {data?.games.map(game => (
                            <GameCard
                                key={game.name}
                                slug={game.slug}
                                title={game.name}
                                developer={game.developers[0].name}
                                img={`http://localhost:1337${game.cover?.url}` || ""}
                                price={game.price}
                            />
                        ))}
                    </Grid>

                    <S.ShowMore role="button" onClick={() => ({})}>
                        <KeyboardArrowDown size={50} title="Show More" />
                    </S.ShowMore>
                </section>
            </S.Main>
        </Base>
    );
};
export default GamesTemplate;
