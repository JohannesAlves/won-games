import { BaseTemplateProps } from "./types";
import * as S from "./styles";

import Footer from "components/Footer";
import Menu from "components/Menu";
import { Container } from "components/Container";

const Base = ({ children }: BaseTemplateProps) => (
    <S.Wrapper>
        <Container>
            <Menu />
        </Container>
        <S.Content>{children}</S.Content>
        <S.SectionFooter>
            <Container>
                <Footer />
            </Container>
        </S.SectionFooter>
    </S.Wrapper>
);

export default Base;
