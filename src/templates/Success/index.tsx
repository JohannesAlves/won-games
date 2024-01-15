/* eslint-disable react-hooks/exhaustive-deps */
import { Done } from "@styled-icons/material-outlined/Done";
import Link from "next/link";

import Base from "templates/Base";

import { Container } from "components/Container";
import ShowCase from "components/ShowCase";

import * as S from "./styles";
import { SuccessTemplateProps } from "./types";
import { useCart } from "hooks/useCart";
import { useEffect } from "react";

const Success = ({
    recommendedTitle,
    recommendedGames,
    recommendedHighlight,
}: SuccessTemplateProps) => {
    const { clearCart } = useCart();

    useEffect(() => {
        clearCart();
    }, []);

    return (
        <Base>
            <Container>
                <S.Wrapper>
                    <S.Heading>Your purchase was successful!</S.Heading>

                    <S.CheckMark>
                        <Done />
                    </S.CheckMark>

                    <S.Text>
                        Wait for your payment details by email. Your game is now available
                        for download inside your{" "}
                        <Link href="/profile/orders">Orders List</Link>. Enjoy!
                    </S.Text>
                </S.Wrapper>
            </Container>

            <ShowCase
                title={recommendedTitle}
                games={recommendedGames}
                highlight={recommendedHighlight}
            />
        </Base>
    );
};

export default Success;
