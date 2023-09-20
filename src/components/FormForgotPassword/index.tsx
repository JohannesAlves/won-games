import { CheckCircleOutline, Email } from "styled-icons/material-outlined";

import * as S from "./styles";

import TextField from "components/TextField";
import Button from "components/Button";
import { useState } from "react";
import { FieldErrors } from "utils/validations/types";
import { forgotValidate } from "utils/validations";
import { FormSuccess } from "components/Form";
import { useRouter } from "next/router";

const FormForgotPassword = () => {
    const { query } = useRouter();
    const [success, setSuccess] = useState(false);
    const [formError, setFormError] = useState("");
    const [fieldError, setFieldError] = useState<FieldErrors>({});
    const [values, setValues] = useState({ email: (query.email as string) || "" });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);

        const errors = forgotValidate(values);

        if (Object.keys(errors).length) {
            setFieldError(errors);
            setLoading(false);
            return;
        }

        setFieldError({});

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            },
        );

        const data = await response.json();
        setLoading(false);

        if (data.error) {
            setFormError(data.message[0].messages[0].message);
        } else {
            setSuccess(true);
        }
    };

    const handleInput = (field: string, value: string) => {
        setValues((previousValues) => ({ ...previousValues, [field]: value }));
    };

    return (
        <S.Wrapper>
            {success ? (
                <FormSuccess>
                    <CheckCircleOutline />
                    You just received on email
                </FormSuccess>
            ) : (
                <>
                    {!!formError && <S.FormError>{formError}</S.FormError>}
                    <form onSubmit={handleSubmit}>
                        <TextField
                            name="email"
                            placeholder="Email"
                            type="email"
                            error={fieldError?.email}
                            onInputChange={(value) => handleInput("email", value)}
                            hasIcon={<Email />}
                            initialValue={query.email as string}
                        />

                        {loading ? (
                            <S.FormLoading />
                        ) : (
                            <Button size="large" fullWidth type="submit">
                                Send email
                            </Button>
                        )}
                    </form>
                </>
            )}
        </S.Wrapper>
    );
};

export default FormForgotPassword;
