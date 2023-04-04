import * as S from "./styles";
import { ButtonProps } from "./types";

export default function Button({
    children,
    size = "medium",
    fullWidth = false,
    minimal = false,
    icon,
    ...props
}: ButtonProps) {
    return (
        <S.Wrapper
            size={size}
            fullWidth={fullWidth}
            hasIcon={!!icon}
            minimal={minimal}
            {...props}
        >
            {!!icon && icon}
            {!!children && <span>{children}</span>}
        </S.Wrapper>
    );
}
