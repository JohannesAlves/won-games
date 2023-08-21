import { Story, Meta } from "@storybook/react/types-6-0";
import CartDropdown from ".";

import items from "components/CartList/mock";
import { CartDropdownProps } from "./types";

export default {
    title: "CartDropdown",
    component: CartDropdown,
    args: {
        items,
        total: "R$ 300,00",
    },
    parameters: {
        backgrounds: {
            default: "won-dark",
        },
    },
} as Meta;

export const Default: Story<CartDropdownProps> = args => (
    <div style={{ maxWidth: "98%", display: "flex", justifyContent: "flex-end" }}>
        <CartDropdown {...args} />
    </div>
);

export const Empty: Story<CartDropdownProps> = () => (
    <div style={{ maxWidth: "98%", display: "flex", justifyContent: "flex-end" }}>
        <CartDropdown />
    </div>
);
