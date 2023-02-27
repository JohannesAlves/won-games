export type ButtonProps = {
    fullWidth?: boolean;
    icon?: React.ReactNode;
    children?: React.ReactNode;
    size?: "small" | "medium" | "large";
    onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export type WrapperProps = {
    hasIcon: boolean;
} & Pick<ButtonProps, "size" | "fullWidth">;
