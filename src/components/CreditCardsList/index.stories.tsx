import { Story, Meta } from "@storybook/react/types-6-0";
import CreditCardsList from ".";
import mockCards from "components/PaymentOptions/mock";
import { CreditCardsListProps } from "./types";
export default {
    title: "Profile/CreditCardsList",
    component: CreditCardsList,
    args: {
        cards: mockCards,
    },
} as Meta;

export const Default: Story<CreditCardsListProps> = args => (
    <div style={{ maxWidth: 650, margin: "auto" }}>
        <CreditCardsList {...args} />
    </div>
);
