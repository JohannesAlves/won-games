import { Story, Meta } from "@storybook/react/types-6-0";
import CartIcon from ".";

export default {
    title: "CartIcon",
    component: CartIcon,
    parameters: {
        backgrounds: {
            default: "won-dark",
        },
    },
} as Meta;

export const Default: Story = () => <CartIcon />;

export const WithQuantity: Story = () => <CartIcon />;

WithQuantity.args = {
    quantity: 3,
};
