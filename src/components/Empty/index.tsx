import Link from "next/link";
import * as S from "./styles";
import { EmptyProps } from "./types";
import Button from "components/Button";

const Empty = ({ description, title, hasLink }: EmptyProps) => (
    <S.Wrapper>
        <S.Image
            src="/img/empty.svg"
            alt="A gamer in a couch playing videogame"
            role="image"
        />

        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>

        {hasLink && (
            <Link href="/">
                <Button>Go back to the store</Button>
            </Link>
        )}
    </S.Wrapper>
);

export default Empty;
