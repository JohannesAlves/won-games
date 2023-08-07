import { Story, Meta } from "@storybook/react/types-6-0";
import GameInfo from ".";
import { GameInfoProps } from "./types";
import mockGame from "./mock";

export default {
    title: "Game/GameInfo",
    component: GameInfo,
    parameters: {
        backgrounds: {
            default: "won-dark",
        },
    },
    args: mockGame,
} as Meta;

export const Default: Story<GameInfoProps> = args => (
    <div style={{ maxWidth: "144rem", padding: "1.5rem" }}>
        <GameInfo {...args} />
    </div>
);
