import Heading from "components/Heading";
import * as S from "./styles";
import TextField from "components/TextField";
import Button from "components/Button";
import { FormProfileProps } from "./types";
import Link from "next/link";

const FormProfile = ({ email, username }: FormProfileProps) => (
    <>
        <Heading lineBottom size="small">
            My Profile
        </Heading>

        <S.Form>
            <TextField
                name="username"
                placeholder="Username"
                label="Name"
                initialValue={username}
            />

            <TextField
                name="email"
                placeholder="E-mail"
                label="E-mail"
                type="email"
                initialValue={email}
                disabled
            />

            <S.ButtonContainer>
                <Link href={`/forgot-password?email=${email}`}>
                    <Button minimal size="medium">
                        Reset Password
                    </Button>
                </Link>
                <Button size="medium">Save</Button>
            </S.ButtonContainer>
        </S.Form>
    </>
);

export default FormProfile;
