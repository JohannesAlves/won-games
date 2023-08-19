import Heading from "components/Heading";
import * as S from "./styles";
import TextField from "components/TextField";
import Button from "components/Button";

const FormProfile = () => (
    <>
        <Heading lineBottom size="small">
            My Profile
        </Heading>

        <S.Form>
            <TextField
                name="name"
                placeholder="Name"
                label="Name"
                initialValue="John Doe"
            />

            <TextField
                name="email"
                placeholder="E-mail"
                label="E-mail"
                type="email"
                initialValue="johndoe@email.com"
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
