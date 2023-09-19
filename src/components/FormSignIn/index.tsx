import Link from "next/link";
import { Email, Lock } from "styled-icons/material-outlined";

import * as S from "./styles";

import TextField from "components/TextField";
import Button from "components/Button";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { FieldErrors } from "utils/validations/types";
import { signInValidate } from "utils/validations";

const FormSignIn = () => {
    const [formError, setFormError] = useState("");
    const [fieldError, setFieldError] = useState<FieldErrors>({});
    const [values, setValues] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const { push } = useRouter();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);

        const errors = signInValidate(values);

        if (Object.keys(errors).length) {
            setFieldError(errors);
            setLoading(false);
            return;
        }

        const result = await signIn("credentials", {
            ...values,
            redirect: false,
            callbackUrl: "/",
        });

        if (result?.url) {
            return push(result.url);
        }

        setLoading(false);

        setFormError("username or password is invalid");
    };

    const handleInput = (field: string, value: string) => {
        setValues((previousValues) => ({ ...previousValues, [field]: value }));
    };

    return (
        <S.Wrapper>
            {!!formError && <S.FormError>{formError}</S.FormError>}
            <form onSubmit={handleSubmit}>
                <TextField
                    name="email"
                    placeholder="Email"
                    type="email"
                    error={fieldError?.email}
                    onInputChange={(value) => handleInput("email", value)}
                    hasIcon={<Email />}
                />
                <TextField
                    name="password"
                    placeholder="Password"
                    type="password"
                    error={fieldError?.password}
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
