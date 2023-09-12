export type TextFieldProps = {
    onInputChange?: (value: string) => void;
    label?: string;
    initialValue?: string;
    iconToRight?: boolean;
    disabled?: boolean;
    error?: string;
    hasIcon?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;
