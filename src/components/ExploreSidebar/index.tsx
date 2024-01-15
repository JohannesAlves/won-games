import Heading from "components/Heading";
import * as S from "./styles";
import Checkbox from "components/Checkbox";
import Radio from "components/Radio";
import Button from "components/Button";
import { ExploreSidebarProps } from "./types";
import { useEffect, useState } from "react";
import { Close, FilterList } from "styled-icons/material-outlined";

import xor from "lodash.xor";

const ExploreSidebar = ({ onFilter, items, initialValues = {} }: ExploreSidebarProps) => {
    const [values, setValues] = useState(initialValues);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        onFilter(values);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values]);

    const handleRadio = (name: string, value: string | boolean) => {
        setValues((previousValues) => ({ ...previousValues, [name]: value }));
    };

    const handleCheckbox = (name: string, value: string) => {
        const currentList = (values[name] as []) || [];
        setValues((previousValues) => ({
            ...previousValues,
            [name]: xor(currentList, [value]),
        }));
    };

    const handleFilterMenuMobile = () => {
        setIsOpen(false);
    };

    return (
        <S.Wrapper isOpen={isOpen}>
            <S.Overlay aria-hidden={isOpen} />
            <S.IconWrapper>
                <FilterList aria-label="open filters" onClick={() => setIsOpen(true)} />
                <Close aria-label="close filters" onClick={() => setIsOpen(false)} />
            </S.IconWrapper>

            <S.Content>
                {items.map((item) => (
                    <S.Items key={item.title}>
                        <Heading
                            lineBottom
                            lineColor="secondary"
                            size="small"
                            color="white"
                        >
                            {item.title}
                        </Heading>

                        {item.type === "checkbox" &&
                            item.fields.map((field) => (
                                <Checkbox
                                    key={field.name}
                                    name={field.name}
                                    label={field.label}
                                    labelFor={field.name}
                                    isChecked={(values[item.name] as string[])?.includes(
                                        field.name,
                                    )}
                                    onCheck={() => handleCheckbox(item.name, field.name)}
                                />
                            ))}

                        {item.type === "radio" &&
                            item.fields.map((field) => (
                                <Radio
                                    key={field.name}
                                    id={field.name}
                                    value={field.name}
                                    name={item.name}
                                    label={field.label}
                                    labelFor={field.name}
                                    defaultChecked={
                                        String(field.name) === String(values[item.name])
                                    }
                                    onChange={() => handleRadio(item.name, field.name)}
                                />
                            ))}
                    </S.Items>
                ))}
            </S.Content>

            <S.Footer>
                <Button fullWidth size="medium" onClick={handleFilterMenuMobile}>
                    Filter
                </Button>
            </S.Footer>
        </S.Wrapper>
    );
};

export default ExploreSidebar;
