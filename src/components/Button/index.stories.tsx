import { Meta, Story } from "@storybook/react/types-6-0";
import { AddShoppingCart } from "@styled-icons/material-outlined/AddShoppingCart";
import Button from ".";

export default {
    title: "Button",
    component: Button,
    argTypes: {
        children: {
            type: "string",
        },
    },
} as Meta;

export const Default: Story = args => <Button {...args} />;

Default.args = {
    children: "Button",
};

export const withIcon: Story = args => <Button {...args} />;

withIcon.args = {
    size: "small",
    children: "Button",
    icon: <AddShoppingCart />,
};

export const asLink: Story = args => <Button {...args} />;

asLink.args = {
    size: "large",
    children: "Button",
    as: "a",
    href: "/link",
};
