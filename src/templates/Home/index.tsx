import BannerSlider from "components/BannerSlider";
import { Container } from "components/Container";
import Footer from "components/Footer";
import GameCardSlider from "components/GameCardSlider";
import Heading from "components/Heading";
import Highlight from "components/Highlight";
import Menu from "components/Menu";

import * as S from "./styles";
import { HomeTemplateProps } from "./types";

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
            <Container>
                <Heading lineLeft lineColor="secondary">
                    News
                </Heading>

                <GameCardSlider items={newGames} color="black" />
            </Container>
        </S.SectionNews>

        <Container>
            <S.SectionMostPopular>
                <Heading lineLeft lineColor="secondary" color="white">
                    Most Popular
                </Heading>
                <Highlight {...mostPopularHighlight} />
                <GameCardSlider items={mostPopularGames} />
            </S.SectionMostPopular>

            <S.SectionUpcoming>
                <Heading lineLeft lineColor="secondary" color="white">
                    Upcomming
                </Heading>
                <GameCardSlider items={upcommingGames} />
                <Highlight {...upcommingHighlight} />
                <GameCardSlider items={upcommingMoreGames} />
            </S.SectionUpcoming>

            <S.SectionFreeGames>
                <Heading lineLeft lineColor="secondary" color="white">
                    Free games
                </Heading>
                <Highlight {...freeHighlight} />
                <GameCardSlider items={freeGames} />
            </S.SectionFreeGames>
        </Container>

        <S.SectionFooter>
            <Container>
                <Footer />
            </Container>
        </S.SectionFooter>
    </section>
);

export default Home;
