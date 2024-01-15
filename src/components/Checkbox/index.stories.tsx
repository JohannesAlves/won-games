import { Story, Meta } from "@storybook/react/types-6-0";
import Checkbox from ".";
import { CheckboxProps } from "./types";

export default {
    title: "Form/Checkbox",
    component: Checkbox,
    argTypes: {
        onCheck: { action: "checked" },
    },
} as Meta;

export const Default: Story<CheckboxProps> = (args) => <Checkbox isChecked {...args} />;
