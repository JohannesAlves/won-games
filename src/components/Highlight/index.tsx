import Button from "../../components/Button";
import * as S from "./styles";
import { HighlightProps } from "./types";
import Image from "next/image";

const Highlight = ({
    title,
    subtitle,
    backgroundImage,
    floatImage,
    buttonLabel,
    buttonLink,
    alignment = "right",
}: HighlightProps) => (
    <S.Wrapper alignment={alignment} data-cy="highlight">
        <Image src={backgroundImage} alt={`${title} background`} layout="fill" />
        {!!floatImage && (
            <S.FloatImageWrapper>
                <Image src={floatImage} alt={title} width={400} height={300} />
            </S.FloatImageWrapper>
        )}
        <S.Content>
            <S.Title>{title}</S.Title>
            <S.SubTitle>{subtitle}</S.SubTitle>
            <Button as="a" href={buttonLink}>
                {buttonLabel}
            </Button>
        </S.Content>
    </S.Wrapper>
);

export default Highlight;
