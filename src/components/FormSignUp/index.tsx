import Link from "next/link";
import { AccountCircle, Email, Lock } from "@styled-icons/material-outlined";

import Button from "components/Button";
import TextField from "components/TextField";

import * as S from "./styles";
import { useState } from "react";
import { UsersPermissionsRegisterInput } from "graphql/generated/globalTypes";
import { useMutation } from "@apollo/client";
import { MUTATION_REGISTER } from "graphql/mutations/register";

const FormSignUp = () => {
    const [values, setValues] = useState<UsersPermissionsRegisterInput>({
        username: "",
        password: "",
        email: "",
    });
    const [createUser, { data }] = useMutation(MUTATION_REGISTER);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        createUser({
            variables: {
                input: {
                    username: values.username,
                    password: values.password,
                    email: values.email,
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
                    onInputChange={(value) => handleInput("username", value)}
                    hasIcon={<AccountCircle />}
                />
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
                <TextField
                    name="confirm-password"
                    placeholder="Confirm password"
                    onInputChange={(value) => handleInput("confirm-password", value)}
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
};

export default FormSignUp;
