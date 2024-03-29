import { Story, Meta } from "@storybook/react/types-6-0";
import GameDetails from ".";
import { GameDetailsProps } from "./types";
import mockGame from "./mock";

export default {
    title: "Game/GameDetails",
    component: GameDetails,
    parameters: {
        backgrounds: {
            default: "won-dark",
        },
    },
    args: mockGame,
    argTypes: {
        releaseDate: {
            control: "date",
        },
        platforms: {
            control: {
                type: "inline-check",
                options: ["windows", "linux", "mac"],
            },
        },
        genres: {
            control: {
                type: "inline-check",
                options: ["Role-Playing", "Narrative", "RPG"],
            },
        },
    },
} as Meta;

export const Default: Story<GameDetailsProps> = (args) => (
    <div style={{ maxWidth: "130rem", margin: "0 auto" }}>
        <GameDetails {...args} />
    </div>
);
