import { Meta, Story } from "@storybook/react/types-6-0";

import Menu from ".";
import { MenuProps } from "./types";

export default {
    title: "Menu",
    component: Menu,
    parameters: {
        backgrounds: {
            default: "won-dark",
        },
    },
} as Meta;

export const Basic: Story<MenuProps> = args => <Menu {...args} />;

Basic.parameters = {
    layout: "fullscreen",
    backgrounds: {
        default: "dark",
    },
};

export const Logged: Story<MenuProps> = args => <Menu {...args} username="Johannes" />;
