import { Story, Meta } from "@storybook/react/types-6-0";
import OrdersList from ".";

import itemsMock from "./mock";
import { OrdersListProps } from "./types";

export default {
    title: "Profile/OrdersList",
    component: OrdersList,
    args: {
        items: itemsMock,
    },
} as Meta;

export const Default: Story<OrdersListProps> = (args) => (
    <div style={{ maxWidth: 850, margin: "auto" }}>
        <OrdersList {...args} />
    </div>
);
