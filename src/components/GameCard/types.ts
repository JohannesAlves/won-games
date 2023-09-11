import { RibbonColors, RibbonSizes } from "../../components/Ribbon/types";

export type GameCardProps = {
    id: string;
    slug: string;
    title: string;
    developer: string;
    img: string;
    price: number;
    promotionalPrice?: number;
    isFavorite?: boolean;
    onFav?: () => void;
    ribbon?: string;
    ribbonColor?: RibbonColors;
    ribbonSize?: RibbonSizes;
};
