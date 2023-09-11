import Base from "templates/Base";
import * as S from "./styles";
import { GamesTemplateProps } from "./types";
import ExploreSidebar from "components/ExploreSidebar";
import { Grid } from "components/Grid";
import GameCard from "components/GameCard";
import { KeyboardArrowDown } from "styled-icons/material-outlined";
import { useQueryGames } from "graphql/queries/games";
import { useRouter } from "next/router";
import { parseQueryStringToFilter, parseQueryStringToWhere } from "utils/filter";
import { ParsedUrlQueryInput } from "querystring";
import Empty from "components/Empty";

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
    const { push, query } = useRouter();

    const { data, fetchMore, loading } = useQueryGames({
        notifyOnNetworkStatusChange: true,
        variables: {
            limit: 15,
            where: parseQueryStringToWhere({
                queryString: query,
                filterItems: filterItems,
            }),
            sort: query.sort as string | null,
        },
    });

    if (!data) return <p>Loading...</p>;

    const { games, gamesConnection } = data;

    const hasMoreGames = games?.length < (gamesConnection?.values?.length || 0);

    const handleShowMore = () => {
        fetchMore({
            variables: {
                limit: 15,
                start: data?.games.length,
            },
        });
    };

    const handleFilter = (items: ParsedUrlQueryInput) => {
        push({
            pathname: "/games",
            query: items,
        });

        return;
    };

    return (
        <Base>
            <S.Main>
                <ExploreSidebar
                    initialValues={parseQueryStringToFilter({
                        queryString: query,
                        filterItems,
                    })}
                    items={filterItems}
                    onFilter={handleFilter}
                />

                <section>
                    {data?.games.length ? (
                        <>
                            <Grid>
                                {data?.games.map(game => (
                                    <GameCard
                                        id={game.id}
                                        key={game.name}
                                        slug={game.slug}
                                        title={game.name}
                                        developer={game.developers[0].name}
                                        img={
                                            `http://localhost:1337${game.cover?.url}` ||
                                            ""
                                        }
                                        price={game.price}
                                    />
                                ))}
                            </Grid>

                            {hasMoreGames && (
                                <S.ShowMore>
                                    {loading ? (
                                        <S.ShowMoreLoading
                                            src="/img/dots.svg"
                                            alt="loading more games"
                                        />
                                    ) : (
                                        <S.ShowMoreButton
                                            role="button"
                                            onClick={handleShowMore}
                                        >
                                            <KeyboardArrowDown
                                                size={50}
                                                title="Show More"
                                            />
                                        </S.ShowMoreButton>
                                    )}
                                </S.ShowMore>
                            )}
                        </>
                    ) : (
                        <Empty
                            description="We not found any games with this filters"
                            title=":("
                        />
                    )}
                </section>
            </S.Main>
        </Base>
    );
};
export default GamesTemplate;
