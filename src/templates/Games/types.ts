import { ItemProps } from "components/ExploreSidebar/types";
import { GameCardProps } from "components/GameCard/types";

export type GamesTemplateProps = {
    games?: GameCardProps[];
    filterItems: ItemProps[];
};
