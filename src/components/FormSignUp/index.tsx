import Link from "next/link";
import { AccountCircle, Email, Lock } from "@styled-icons/material-outlined";

import Button from "components/Button";
import TextField from "components/TextField";

import * as S from "./styles";

const FormSignUp = () => (
    <S.Wrapper>
        <form>
            <TextField
                name="name"
                placeholder="Name"
                type="name"
                hasIcon={<AccountCircle />}
            />
            <TextField
                name="email"
                placeholder="Email"
                type="email"
                hasIcon={<Email />}
            />
            <TextField
                name="password"
                placeholder="Password"
                type="password"
                hasIcon={<Lock />}
            />
            <TextField
                name="confirm-password"
                placeholder="Confirm password"
                type="password"
                hasIcon={<Lock />}
            />

            <Button size="large" fullWidth>
                Sign up now
            </Button>

            <S.FormLink>
                Already have an account? <Link href="/sign-in">Sign in</Link>
            </S.FormLink>
        </form>
    </S.Wrapper>
);

export default FormSignUp;
