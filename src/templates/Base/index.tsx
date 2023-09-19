import { BaseTemplateProps } from "./types";
import * as S from "./styles";

import Footer from "components/Footer";
import Menu from "components/Menu";
import { Container } from "components/Container";
import { useSession } from "next-auth/react";

const Base = ({ children }: BaseTemplateProps) => {
    const { data: session, status } = useSession();

    return (
        <S.Wrapper>
            <Container>
                <Menu username={session?.user?.name} status={status} />
            </Container>
            <S.Content>{children}</S.Content>
            <S.SectionFooter>
                <Container>
                    <Footer />
                </Container>
            </S.SectionFooter>
        </S.Wrapper>
    );
};

export default Base;
