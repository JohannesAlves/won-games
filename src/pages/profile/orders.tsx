import Profile from "templates/Profile";
import OrdersList from "components/OrdersList";
import { OrdersListProps } from "components/OrdersList/types";

import mockOrders from "components/OrdersList/mock";
import { GetServerSidePropsContext } from "next";
import protectedRoutes from "utils/protecetedRoutes";

export default function Orders(props: OrdersListProps) {
    return (
        <Profile>
            <OrdersList {...props} />
        </Profile>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await protectedRoutes(context);

    return {
        props: {
            items: mockOrders,
            session,
        },
    };
}
