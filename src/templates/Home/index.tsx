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
    upcommingMoreGames,
    freeGames,
    freeHighlight,
}: HomeTemplateProps) => (
    <Base>
        <Container>
            <S.SectionBanner>
                <BannerSlider items={banners} />
            </S.SectionBanner>
        </Container>

        <S.SectionNews>
            <ShowCase title="News" games={newGames} />
        </S.SectionNews>

        <ShowCase
            title="Most Popular"
            highlight={mostPopularHighlight}
            games={mostPopularGames}
        />

        <S.SectionUpcoming>
            <ShowCase title="Upcoming" games={upcommingGames} />
            <ShowCase highlight={upcommingHighlight} games={upcommingMoreGames} />
        </S.SectionUpcoming>

        <ShowCase title="Free Games" highlight={freeHighlight} games={freeGames} />
    </Base>
);

export default Home;
