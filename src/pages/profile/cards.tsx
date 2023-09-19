import CreditCardsList from "components/CreditCardsList";
import Profile from "templates/Profile";
import cardsMock from "components/PaymentOptions/mock";
import { CreditCardsListProps } from "components/CreditCardsList/types";
import { GetServerSidePropsContext } from "next";
import protectedRoutes from "utils/protecetedRoutes";

export default function Cards(props: CreditCardsListProps) {
    return (
        <Profile>
            <CreditCardsList {...props} />
        </Profile>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await protectedRoutes(context);

    return {
        props: {
            cards: cardsMock,
            session,
        },
    };
}
