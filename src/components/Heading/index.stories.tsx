import { Meta, Story } from "@storybook/react/types-6-0";

import Heading from ".";
import { HeadingProps } from "./types";

export default {
    title: "Heading",
    component: Heading,
    argTypes: {
        children: {
            type: "string",
        },
    },
} as Meta;

export const Default: Story<HeadingProps> = args => <Heading {...args} />;

Default.args = {
    children: "Most Populars",
};
