import { GameCardProps } from "components/GameCard/types";
import { HighlightProps } from "components/Highlight/types";

export type SuccessTemplateProps = {
    recommendedTitle: string;
    recommendedGames: GameCardProps[];
    recommendedHighlight: HighlightProps;
};
