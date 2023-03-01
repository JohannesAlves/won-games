import Button from "../../components/Button";
import * as S from "./styles";
import { BannerProps } from "./types";

export default function Banner({
    img,
    title,
    subtitle,
    buttonLabel,
    buttonLink,
}: BannerProps) {
    return (
        <S.Wrapper>
            <S.Image src={img} role="img" aria-label={title} />

            <S.Caption>
                <S.Title>{title}</S.Title>
                <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
                <Button as="a" href={buttonLink} size="medium">
                    {buttonLabel}
                </Button>
            </S.Caption>
        </S.Wrapper>
    );
}
