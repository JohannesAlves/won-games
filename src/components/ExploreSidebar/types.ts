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

type Values = {
    [field: string]: boolean | string;
};

export type ExploreSidebarProps = {
    items: ItemProps[];
    initialValues?: Values;
    onFilter: (values: Values) => void;
};
