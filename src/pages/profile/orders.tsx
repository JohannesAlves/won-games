import Profile from "templates/Profile";
import OrdersList from "components/OrdersList";
import { OrdersListProps } from "components/OrdersList/types";

import mockOrders from "components/OrdersList/mock";

export default function Orders(props: OrdersListProps) {
    return (
        <Profile>
            <OrdersList {...props} />
        </Profile>
    );
}

export async function getServerSideProps() {
    return {
        props: {
            items: mockOrders,
        },
    };
}
