import { Lock } from "styled-icons/material-outlined";

import * as S from "./styles";

import TextField from "components/TextField";
import Button from "components/Button";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { FieldErrors } from "utils/validations/types";
import { resetValidate } from "utils/validations";

const FormResetPassword = () => {
    const [formError, setFormError] = useState("");
    const [fieldError, setFieldError] = useState<FieldErrors>({});
    const [values, setValues] = useState({ password: "", confirm_password: "" });
    const [loading, setLoading] = useState(false);
    const { query } = useRouter();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);

        const errors = resetValidate(values);

        if (Object.keys(errors).length) {
            setFieldError(errors);
            setLoading(false);
            return;
        }

        setFieldError({});

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    password: values.password,
                    passwordConfirmation: values.confirm_password,
                    code: query.code,
                }),
            },
        );

        const data = await response.json();
        setLoading(false);
        if (data.error) {
            setFormError(data.message[0].messages[0].message);
            setLoading(false);
        } else {
            signIn("credentials", {
                email: data.user.email,
                password: values.password,
                callbackUrl: "/",
            });
        }
    };

    const handleInput = (field: string, value: string) => {
        setValues((previousValues) => ({ ...previousValues, [field]: value }));
    };

    return (
        <S.Wrapper>
            {!!formError && <S.FormError>{formError}</S.FormError>}
            <form onSubmit={handleSubmit}>
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

                {loading ? (
                    <S.FormLoading />
                ) : (
                    <Button size="large" fullWidth type="submit">
                        Reset password
                    </Button>
                )}
            </form>
        </S.Wrapper>
    );
};

export default FormResetPassword;
