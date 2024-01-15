import { Story, Meta } from "@storybook/react/types-6-0";
import TextContent from ".";
import { TextContentProps } from "./types";
import textMock from "./mock";

export default {
    title: "TextContent",
    component: TextContent,
    args: textMock,
    parameters: {
        background: {
            default: "won-dark",
        },
    },
} as Meta;

export const Default: Story<TextContentProps> = (args) => <TextContent {...args} />;
