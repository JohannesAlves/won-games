import { useState } from "react";
import React from "react";

import * as S from "./styles";
import { TextFieldProps } from "./types";

const TextField = ({
    label,
    labelFor = "",
    initialValue = "",
    onInput,
    hasIcon,
    iconToRight,
    disabled = false,
    error,
    ...props
}: TextFieldProps) => {
    const [value, setValue] = useState(initialValue);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        setValue(newValue);

        !!onInput && onInput(newValue);
    };

    return (
        <S.Wrapper error={error}>
            {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
            <S.InputWrapper iconToRight={!!iconToRight && iconToRight}>
                {!!hasIcon && <S.Icon>{hasIcon}</S.Icon>}
                <S.Input
                    type="text"
                    onChange={onChange}
                    value={value}
                    {...props}
                    disabled={disabled}
                />
            </S.InputWrapper>
            {!!error && <S.Error>{error}</S.Error>}
        </S.Wrapper>
    );
};

export default TextField;
