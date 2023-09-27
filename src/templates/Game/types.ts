import { GalleryImageProps } from "components/Gallery/types";
import { GameCardProps } from "components/GameCard/types";
import { GameDetailsProps } from "components/GameDetails/types";
import { GameInfoProps } from "components/GameInfo/types";
import { HighlightProps } from "components/Highlight/types";

export type GameTemplateProps = {
    slug?: string;
    cover: string;
    gameInfo: GameInfoProps;
    gallery?: GalleryImageProps[];
    description: string;
    details: GameDetailsProps;
    upcomingGames: GameCardProps[];
    upcomingHighlight: HighlightProps;
    recommendedGames: GameCardProps[];
};
