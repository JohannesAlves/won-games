import BannerSlider from "components/BannerSlider";
import { Container } from "components/Container";
import Footer from "components/Footer";
import GameCardSlider from "components/GameCardSlider";
import Heading from "components/Heading";
import Highlight from "components/Highlight";
import Menu from "components/Menu";

import * as S from "./styles";
import { HomeTemplateProps } from "./types";
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
    <section>
        <Container>
            <Menu />
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

        <S.SectionFooter>
            <Container>
                <Footer />
            </Container>
        </S.SectionFooter>
    </section>
);

export default Home;
