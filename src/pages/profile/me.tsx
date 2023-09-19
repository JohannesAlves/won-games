import FormProfile from "components/FormProfile";
import { FormProfileProps } from "components/FormProfile/types";
import { QueryProfileMe } from "graphql/generated/QueryProfileMe";
import { QUERY_PROFILE_ME } from "graphql/queries/profile";
import { GetServerSidePropsContext } from "next";
import Profile from "templates/Profile";
import { initializeApollo } from "utils/apollo";
import protectedRoutes from "utils/protecetedRoutes";

export default function Me(props: FormProfileProps) {
    return (
        <Profile>
            <FormProfile {...props} />
        </Profile>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await protectedRoutes(context);
    const apolloClient = initializeApollo(null, session);

    const { data } = await apolloClient.query<QueryProfileMe>({
        query: QUERY_PROFILE_ME,
    });

    return {
        props: { session, username: data?.me?.username, email: data?.me?.email },
    };
}
