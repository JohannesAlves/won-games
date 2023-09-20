import { Email } from "styled-icons/material-outlined";

import * as S from "./styles";

import TextField from "components/TextField";
import Button from "components/Button";
import { useState } from "react";
import { useRouter } from "next/router";
import { FieldErrors } from "utils/validations/types";
import { forgotValidate } from "utils/validations";

const FormForgotPassword = () => {
    const [formError, setFormError] = useState("");
    const [fieldError, setFieldError] = useState<FieldErrors>({});
    const [values, setValues] = useState({ email: "" });
    const [loading, setLoading] = useState(false);
    const routes = useRouter();
    const { push, query } = routes;

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);

        const errors = forgotValidate(values);

        if (Object.keys(errors).length) {
            setFieldError(errors);
            setLoading(false);
            return;
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

                {loading ? (
                    <S.FormLoading />
                ) : (
                    <Button size="large" fullWidth type="submit">
                        Send email
                    </Button>
                )}
            </form>
        </S.Wrapper>
    );
};

export default FormForgotPassword;
