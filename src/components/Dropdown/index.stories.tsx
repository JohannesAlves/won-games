import { Story, Meta } from "@storybook/react/types-6-0";
import Dropdown from ".";
import { DropdownProps } from "./types";

export default {
    title: "Dropdown",
    component: Dropdown,
    parameters: {
        backgrounds: {
            default: "won-dark",
        },
    },
} as Meta;

export const Default: Story<DropdownProps> = args => <Dropdown {...args} />;

Default.args = {
    title: "Click here",
    children: "content",
};
