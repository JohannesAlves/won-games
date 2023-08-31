import { ParsedUrlQueryInput } from "querystring";

export type ItemProps = {
    title: string;
    name: string;
    type: "checkbox" | "radio" | string;
    fields: Field[];
};

type Field = {
    label: string;
    name: string;
};

type Values = ParsedUrlQueryInput;

export type ExploreSidebarProps = {
    items: ItemProps[];
    initialValues?: Values;
    onFilter: (values: Values) => void;
};
