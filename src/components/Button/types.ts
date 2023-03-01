import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export type ButtonTypes =
    | AnchorHTMLAttributes<HTMLAnchorElement>
    | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
    fullWidth?: boolean;
    icon?: React.ReactNode;
    size?: "small" | "medium" | "large";
    as?: React.ElementType;
} & ButtonTypes;

export type WrapperProps = {
    hasIcon: boolean;
} & Pick<ButtonProps, "size" | "fullWidth">;
