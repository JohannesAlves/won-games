import styled, { DefaultTheme, css } from "styled-components";
import { TextFieldProps } from "./types";

type IconPositionProps = Pick<TextFieldProps, "iconToRight">;

const wrapperModifiers = {
    iconToRight: () => css`
        flex-direction: row-reverse;
    `,
    error: (theme: DefaultTheme) => css`
        ${InputWrapper} {
            border-color: ${theme.colors.red};
        }

        ${Icon},
        ${Label} {
            color: ${theme.colors.red};
        }
    `,
};

export const InputWrapper = styled.div<IconPositionProps>`
    ${({ theme, iconToRight }) => css`
        display: flex;
        background: ${theme.colors.lightGray};
        border-radius: 0.2rem;
        padding: 0 ${theme.spacings.xsmall};
        border: 0.2rem solid;
        border-color: ${theme.colors.lightGray};
        &:focus-within {
            box-shadow: 0 0 0.5rem ${theme.colors.primary};
        }

        ${!!iconToRight && wrapperModifiers.iconToRight}
    `}
`;

export const Input = styled.input`
    ${({ theme }) => css`
        color: ${theme.colors.black};
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.medium};
        padding: ${theme.spacings.xxsmall};
        background: transparent;
        border: 0;
        outline: none;
        width: 100%;

        &:-webkit-autofill {
            -webkit-box-shadow: 0 0 0 ${theme.spacings.small} ${theme.colors.lightGray}
                inset;
            filter: none;
        }
    `}
`;

export const Label = styled.label`
    ${({ theme }) => css`
        font-size: ${theme.font.sizes.small};
        color: ${theme.colors.black};
        cursor: pointer;
    `}
`;

export const Wrapper = styled.div<Pick<TextFieldProps, "error">>`
    ${({ theme, error }) => css`
        ${!!error && wrapperModifiers.error(theme)}
    `}
`;

export const Icon = styled.div`
    ${({ theme }) => css`
        display: flex;
        width: 2rem;
        color: ${theme.colors.gray};
        & > svg {
            width: 100%;
        }
    `}
`;

export const Error = styled.p`
    ${({ theme }) => css`
        color: ${theme.colors.red};
        font-size: ${theme.font.sizes.xsmall};
    `}
`;
