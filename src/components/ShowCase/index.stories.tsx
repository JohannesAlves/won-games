import { Story, Meta } from "@storybook/react/types-6-0";
import ShowCase from ".";
import { ShowCaseProps } from "./types";
import highlightMock from "components/Highlight/mock";
import gamesMock from "components/GameCardSlider/mock";

export default {
    title: "ShowCase",
    component: ShowCase,
    decorators: [
        (Story) => (
            <div style={{ margin: "0 auto" }}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        layouts: "fullscren",
        backgrounds: {
            default: "won-dark",
        },
    },
} as Meta;

export const Default: Story<ShowCaseProps> = (args) => <ShowCase {...args} />;

Default.args = { title: "Most Popular", highlight: highlightMock, games: gamesMock };
