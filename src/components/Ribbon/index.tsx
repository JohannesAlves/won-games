import * as S from "./styles";
import { RibbonProps } from "./types";

export default function Ribbon({
    children,
    color = "primary",
    size = "normal",
}: RibbonProps) {
    return (
        <S.Wrapper color={color} size={size}>
            {children}
        </S.Wrapper>
    );
}
