import Logo from "components/Logo";
import Heading from "components/Heading";

import * as S from "./styles";
import { AuthProps } from "./types";

const Auth = ({ title, children }: AuthProps) => (
    <S.Wrapper>
        <S.BannerBlock>
            <S.BannerContent>
                <Logo id="banner" />

                <div>
                    <Heading size="huge" color="white">
                        All your favorite games in one place
                    </Heading>
                    <S.Subtitle>
                        <strong>WON</strong> is the best and most complete gaming
                        platform.
                    </S.Subtitle>
                </div>

                <S.Footer>Won Games 2023 © Todos os Direitos Reservados</S.Footer>
            </S.BannerContent>
        </S.BannerBlock>

        <S.Content>
            <S.ContentWrapper>
                <Logo color="black" size="large" id="content" />
                <Heading color="black" lineColor="secondary" lineLeft>
                    {title}
                </Heading>

                {children}
            </S.ContentWrapper>
        </S.Content>
    </S.Wrapper>
);

export default Auth;
