import { RibbonColors, RibbonSizes } from "../../components/Ribbon/types";

export type GameCardProps = {
    slug: string;
    title: string;
    developer: string;
    img: string;
    price: string;
    promotionalPrice?: string;
    isFavorite?: boolean;
    onFav?: () => void;
    ribbon?: string;
    ribbonColor?: RibbonColors;
    ribbonSize?: RibbonSizes;
};
