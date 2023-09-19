import Heading from "components/Heading";
import * as S from "./styles";
import TextField from "components/TextField";
import Button from "components/Button";
import { FormProfileProps } from "./types";

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

            <TextField
                name="password"
                placeholder="Type your password"
                label="Password"
                type="password"
                disabled
            />

            <TextField
                name="new_password"
                placeholder="New password"
                label="New password"
                type="password"
                disabled
            />

            <Button size="medium">Save</Button>
        </S.Form>
    </>
);

export default FormProfile;
