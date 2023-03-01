import * as S from "./styles";
import { HeadingProps } from "./types";

export default function Heading({
    children,
    color = "black",
    lineLeft = false,
    lineBottom = false,
    size = "medium",
    lineColor = "primary",
}: HeadingProps) {
    return (
        <S.Wrapper
            color={color}
            lineLeft={lineLeft}
            lineBottom={lineBottom}
            size={size}
            lineColor={lineColor}
        >
            {children}
        </S.Wrapper>
    );
}
