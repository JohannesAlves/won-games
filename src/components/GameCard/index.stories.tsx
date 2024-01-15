import { Meta, Story } from "@storybook/react/types-6-0";

import GameCard from ".";
import { GameCardProps } from "./types";
import { CartContextData } from "hooks/useCart/types";

export default {
    title: "GameCard",
    component: GameCard,
    args: {
        slug: "population-zero",
        title: "Population Zero",
        developer: "Rockstar Games",
        image: "https://source.unsplash.com/user/willianjusten/300x140",
        price: 235,
        promotionalPrice: 200,
    },
    argTypes: {
        onFav: { action: "clicked" },
    },
} as Meta;

export const Basic: Story<GameCardProps> = (args) => (
    <div style={{ width: "30rem" }}>
        <GameCard {...args} />
    </div>
);

export const IsInCart: Story<GameCardProps & CartContextData> = (args) => (
    <div style={{ width: "30rem" }}>
        <GameCard {...args} />
    </div>
);

IsInCart.args = {
    isInCart: () => true,
};

export const WithRibbon: Story<GameCardProps> = (args) => (
    <div style={{ width: "30rem" }}>
        <GameCard {...args} />
    </div>
);

WithRibbon.args = {
    ribbon: "20% 0FF",
    ribbonSize: "small",
    ribbonColor: "primary",
};
