import Link from "next/link";
import { Email, Lock } from "styled-icons/material-outlined";

import * as S from "./styles";

import TextField from "components/TextField";
import Button from "components/Button";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const FormSignIn = () => {
    const [values, setValues] = useState({});
    const [loading, setLoading] = useState(false);
    const { push } = useRouter();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);

        const result = await signIn("credentials", {
            ...values,
            redirect: false,
            callbackUrl: "/",
        });

        if (result?.url) {
            return push(result.url);
        }

        setLoading(false);

        console.error("incorrect credentials");
    };

    const handleInput = (field: string, value: string) => {
        setValues((previousValues) => ({ ...previousValues, [field]: value }));
    };

    return (
        <S.Wrapper>
            <form onSubmit={handleSubmit}>
                <TextField
                    name="email"
                    placeholder="Email"
                    type="email"
                    onInputChange={(value) => handleInput("email", value)}
                    hasIcon={<Email />}
                />
                <TextField
                    name="password"
                    placeholder="Password"
                    type="password"
                    onInputChange={(value) => handleInput("password", value)}
                    hasIcon={<Lock />}
                />
                <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

                {loading ? (
                    <S.FormLoading />
                ) : (
                    <Button size="large" fullWidth type="submit">
                        Sign in Now
                    </Button>
                )}

                <S.FormLink>
                    Don&apos;t have an account? <Link href="/sign-up">Sign Up</Link>
                </S.FormLink>
            </form>
        </S.Wrapper>
    );
};

export default FormSignIn;
