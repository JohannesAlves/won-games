import Heading from "components/Heading";
import Highlight from "components/Highlight";
import GameCardSlider from "components/GameCardSlider";

import * as S from "./styles";
import { ShowCaseProps } from "./types";

const ShowCase = ({ games, highlight, title }: ShowCaseProps) => (
    <S.Wrapper>
        {!!title && (
            <Heading lineLeft lineColor="secondary" color="white">
                {title}
            </Heading>
        )}
        {!!highlight && <Highlight {...highlight} />}
        {!!games && <GameCardSlider items={games} />}
    </S.Wrapper>
);

export default ShowCase;
