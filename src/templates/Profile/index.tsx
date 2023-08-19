import Base from "templates/Base";
import * as S from "./styles";
import { Container } from "components/Container";
import Heading from "components/Heading";
import ProfileMenu from "components/ProfileMenu";
import { ProfileProps } from "./types";
import { useRouter } from "next/router";

const Profile = ({ children }: ProfileProps) => {
    const { asPath } = useRouter();

    return (
        <Base>
            <Container>
                <Heading lineLeft lineColor="secondary" color="white">
                    My Profile
                </Heading>

                <S.Main>
                    <ProfileMenu activeLink={asPath} />
                    <S.Content>{children}</S.Content>
                </S.Main>
            </Container>
        </Base>
    );
};

export default Profile;
