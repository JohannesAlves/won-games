import Link from "next/link";
import { AccountCircle, Email, Lock } from "@styled-icons/material-outlined";

import Button from "components/Button";
import TextField from "components/TextField";

import * as S from "./styles";
import { useState } from "react";
import { UsersPermissionsRegisterInput } from "graphql/generated/globalTypes";
import { useMutation } from "@apollo/client";
import { MUTATION_REGISTER } from "graphql/mutations/register";
import { signIn } from "next-auth/react";
import { FieldErrors } from "utils/validations/types";
import { signUpValidate } from "utils/validations";

const FormSignUp = () => {
    const [fieldError, setFieldError] = useState<FieldErrors>({});
    const [values, setValues] = useState<UsersPermissionsRegisterInput>({
        username: "",
        password: "",
        email: "",
    });
    const [createUser, { error }] = useMutation(MUTATION_REGISTER, {
        onCompleted: () => {
            !error &&
                signIn("credentials", {
                    email: values.email,
                    password: values.password,
                    callbackUrl: "/",
                });
        },
    });

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const errors = signUpValidate(values);

        if (Object.keys(errors).length) {
            setFieldError(errors);
            return;
        }

        setFieldError({});

        createUser({
            variables: {
                input: {
                    username: values.username,
                    email: values.email,
                    password: values.password,
                },
            },
        });
    };

    const handleInput = (field: string, value: string) => {
        setValues((previousValues) => ({ ...previousValues, [field]: value }));
    };

    return (
        <S.Wrapper>
            <form onSubmit={handleSubmit}>
                <TextField
                    name="username"
                    placeholder="Username"
                    type="text"
                    error={fieldError?.username}
                    onInputChange={(value) => handleInput("username", value)}
                    hasIcon={<AccountCircle />}
                />
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
                <TextField
                    name="confirm_password"
                    placeholder="Confirm password"
                    onInputChange={(value) => handleInput("confirm_password", value)}
                    type="password"
                    error={fieldError?.confirm_password}
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
};

export default FormSignUp;
