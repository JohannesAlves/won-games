import CreditCardsList from "components/CreditCardsList";
import Profile from "templates/Profile";
import cardsMock from "components/PaymentOptions/mock";
import { CreditCardsListProps } from "components/CreditCardsList/types";

export default function Cards(props: CreditCardsListProps) {
    return (
        <Profile>
            <CreditCardsList {...props} />
        </Profile>
    );
}

export async function getServerSideProps() {
    return {
        props: {
            cards: cardsMock,
        },
    };
}
