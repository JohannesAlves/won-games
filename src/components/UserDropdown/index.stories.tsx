import { Story, Meta } from "@storybook/react/types-6-0";
import UserDropdown from ".";
import { UserDropdownProps } from "./types";

export default {
    title: "UserDropdown",
    component: UserDropdown,
    parameters: {
        backgrounds: {
            default: "won-dark",
        },
    },
} as Meta;

export const Default: Story<UserDropdownProps> = (args) => (
    <div style={{ maxWidth: "98%", display: "flex", justifyContent: "flex-end" }}>
        <UserDropdown {...args} />
    </div>
);

Default.args = {
    username: "Johannes",
};
