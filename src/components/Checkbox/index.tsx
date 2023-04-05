import { useState } from "react";
import * as S from "./styles";
import { CheckboxProps } from "./types";

const Checkbox = ({
    label,
    labelFor = "",
    labelColor = "white",
    onCheck,
    isChecked = false,
    value,
    ...props
}: CheckboxProps) => {
    const [checked, setChecked] = useState(isChecked);

    const onChange = () => {
        const status = !checked;
        setChecked(status);

        if (onCheck) {
            onCheck(status);
        }
    };

    return (
        <S.Wrapper>
            <S.Input
                id={labelFor}
                type="checkbox"
                onChange={onChange}
                checked={checked}
                value={value}
                {...props}
            />
            {!!label && (
                <S.Label htmlFor={labelFor} labelColor={labelColor}>
                    {label}
                </S.Label>
            )}
        </S.Wrapper>
    );
};
export default Checkbox;
