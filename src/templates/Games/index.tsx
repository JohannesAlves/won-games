import Base from "templates/Base";
import * as S from "./styles";
import { GamesTemplateProps } from "./types";
import ExploreSidebar from "components/ExploreSidebar";
import { Grid } from "components/Grid";
import GameCard from "components/GameCard";
import { KeyboardArrowDown } from "styled-icons/material-outlined";

const GamesTemplate = ({ games = [], filterItems }: GamesTemplateProps) => (
    <Base>
        <S.Main>
            <ExploreSidebar items={filterItems} onFilter={() => ({})} />

            <section>
                <Grid>
                    {games.map(game => (
                        <GameCard key={game.title} {...game} />
                    ))}
                </Grid>

                <S.ShowMore role="button" onClick={() => ({})}>
                    <KeyboardArrowDown size={50} title="Show More" />
                </S.ShowMore>
            </section>
        </S.Main>
    </Base>
);

export default GamesTemplate;
