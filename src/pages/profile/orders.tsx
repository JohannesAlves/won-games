import Profile from "templates/Profile";
import OrdersList from "components/OrdersList";
import { OrdersListProps } from "components/OrdersList/types";

import { GetServerSidePropsContext } from "next";
import protectedRoutes from "utils/protecetedRoutes";
import { initializeApollo } from "utils/apollo";
import { QueryOrders, QueryOrdersVariables } from "graphql/generated/QueryOrders";
import { QUERY_ORDERS } from "graphql/queries/orders";
import { ordersMapper } from "utils/mappers";

export default function Orders(props: OrdersListProps) {
    return (
        <Profile>
            <OrdersList {...props} />
        </Profile>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await protectedRoutes(context);
    const apolloClient = initializeApollo(null, session);

    const { data } = await apolloClient.query<QueryOrders, QueryOrdersVariables>({
        query: QUERY_ORDERS,
        variables: {
            identifier: session?.id || "",
        },
        fetchPolicy: "no-cache",
    });

    return {
        props: {
            items: ordersMapper(data.orders),
            session,
        },
    };
}
