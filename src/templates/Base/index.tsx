import { BaseTemplateProps } from "./types";
import * as S from "./styles";

import Footer from "components/Footer";
import Menu from "components/Menu";
import { Container } from "components/Container";

const Base = ({ children }: BaseTemplateProps) => (
    <section>
        <Container>
            <Menu />
        </Container>
        {children}
        <S.SectionFooter>
            <Container>
                <Footer />
            </Container>
        </S.SectionFooter>
    </section>
);

export default Base;
