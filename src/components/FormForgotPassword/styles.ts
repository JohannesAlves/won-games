import styled, { css } from "styled-components";
import { lighten, darken } from "polished";

import * as TextFieldStyles from "components/TextField/styles";
import * as ButtonStyles from "components/Button/styles";
import Link from "next/link";

export const Wrapper = styled.div`
    ${({ theme }) => css`
        ${TextFieldStyles.Wrapper} {
            margin: ${theme.spacings.xxsmall} 0;
        }
        ${ButtonStyles.Wrapper} {
            margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
        }
    `}
`;

export const FormError = styled.div`
    ${({ theme }) => css`
        text-align: center;
        color: red;
        font-size: ${theme.font.sizes.small};
        svg {
            width: 1.6rem;
        }
    `}
`;

export const FormLoading = styled.img.attrs(() => ({
    src: "/img/dots.svg",
    alt: "Waiting...",
}))`
    width: 4rem;
    display: flex;
    justify-content: center;
    margin: 1rem auto;
`;

export const FormLink = styled.div`
    ${({ theme }) => css`
        font-size: ${theme.font.sizes.small};
        color: ${theme.colors.black};
        text-align: center;
        a {
            color: ${theme.colors.secondary};
            text-decoration: underline;
            transition: color, border, ${theme.transition.fast};
            &:hover {
                color: ${darken(0.1, theme.colors.secondary)};
            }
        }
    `}
`;

export const ForgotPassword = styled(Link)`
    ${({ theme }) => css`
        display: block;
        font-size: ${theme.font.sizes.small};
        color: ${theme.colors.black};
        text-decoration: none;
        text-align: right;
        &:hover {
            color: ${lighten(0.3, theme.colors.black)};
        }
    `}
`;
