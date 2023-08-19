import Heading from "components/Heading";
import * as S from "./styles";
import { CreditCardsListProps } from "./types";

const CreditCardsList = ({ cards }: CreditCardsListProps) => (
    <>
        <Heading lineBottom size="small">
            My Cards
        </Heading>

        {cards?.map(card => (
            <S.Card key={card.number}>
                <img src={card.img} alt={card.flag} /> <span>{card.number}</span>
            </S.Card>
        ))}
    </>
);

export default CreditCardsList;
