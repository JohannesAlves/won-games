export type TextFieldProps = {
    onInput?: (value: string) => void;
    label?: string;
    labelFor?: string;
    initialValue?: string;
    iconToRight?: boolean;
    disabled?: boolean;
    error?: string;
    hasIcon?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;
