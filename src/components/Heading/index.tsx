import * as S from "./styles";
import { HeadingProps } from "./types";

export default function Heading({
    children,
    color = "black",
    lineLeft = false,
    lineBottom = false,
}: HeadingProps) {
    return (
        <S.Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
            {children}
        </S.Wrapper>
    );
}
