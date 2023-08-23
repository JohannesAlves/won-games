import * as S from "./styles";
import { HomeTemplateProps } from "./types";
import Base from "templates/Base";

import BannerSlider from "components/BannerSlider";
import { Container } from "components/Container";
import ShowCase from "components/ShowCase";

const Home = ({
    banners,
    newGames,
    mostPopularHighlight,
    mostPopularGames,
    upcommingGames,
    upcommingHighlight,
    freeGames,
    freeHighlight,
    freeGamesTitle,
    mostPopularGamesTitle,
    newGamesTitle,
    upcomingGamesTitle,
}: HomeTemplateProps) => (
    <Base>
        <Container>
            <S.SectionBanner>
                <BannerSlider items={banners} />
            </S.SectionBanner>
        </Container>

        <S.SectionNews>
            <ShowCase title={newGamesTitle} games={newGames} />
        </S.SectionNews>

        <ShowCase
            title={mostPopularGamesTitle}
            highlight={mostPopularHighlight}
            games={mostPopularGames}
        />

        <ShowCase
            title={upcomingGamesTitle}
            games={upcommingGames}
            highlight={upcommingHighlight}
        />

        {freeGames && (
            <ShowCase
                title={freeGamesTitle}
                highlight={freeHighlight}
                games={freeGames}
            />
        )}
    </Base>
);

export default Home;
