import Link from "next/link";
import { Email, Lock } from "styled-icons/material-outlined";

import * as S from "./styles";

import TextField from "components/TextField";
import Button from "components/Button";

const FormSignIn = () => (
    <S.Wrapper>
        <form>
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
            <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

            <Button size="large" fullWidth>
                Sign in Now
            </Button>

            <S.FormLink>
                Don&apos;t have an account? <Link href="/sign-up">Sign Up</Link>
            </S.FormLink>
        </form>
    </S.Wrapper>
);

export default FormSignIn;
