import { NextSeo } from "next-seo";
import GameInfo from "components/GameInfo";
import Base from "templates/Base";

import * as S from "./styles";
import { GameTemplateProps } from "./types";
import TextContent from "components/TextContent";
import GameDetails from "components/GameDetails";
import Gallery from "components/Gallery";
import ShowCase from "components/ShowCase";

const Game = ({
    slug,
    cover,
    gameInfo,
    gallery,
    description,
    details,
    upcomingGames,
    upcomingHighlight,
    recommendedGames,
}: GameTemplateProps) => (
    <Base>
        <NextSeo
            title={`${gameInfo.title} - Won Games`}
            description={gameInfo.description}
            canonical={`https://wongames.willianjusten.com.br/game/${slug}`}
            openGraph={{
                url: `https://wongames.willianjusten.com.br/game/${slug}`,
                title: `${gameInfo.title} - Won Games`,
                description: gameInfo.description,
                images: [
                    {
                        url: cover,
                        alt: `${gameInfo.title}`,
                    },
                ],
            }}
        />
        <S.Cover src={cover} role="image" aria-label="cover image" />

        <S.Main>
            <S.SectionGameInfo>
                <GameInfo {...gameInfo} />
            </S.SectionGameInfo>

            <S.SectionGallery>
                {!!gallery && <Gallery items={gallery} />}
            </S.SectionGallery>

            <S.SectionDescription>
                <TextContent title="Description" content={description} />
            </S.SectionDescription>

            <S.SectionGameDetails>
                <GameDetails {...details} />
            </S.SectionGameDetails>

            <ShowCase
                title="Upcoming"
                games={upcomingGames}
                highlight={upcomingHighlight}
            />

            <ShowCase title="You may like these games" games={recommendedGames} />
        </S.Main>
    </Base>
);

export default Game;
