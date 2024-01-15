import { Story, Meta } from "@storybook/react/types-6-0";
import ProfileMenu from ".";
import { ProfileMenuProps } from "./types";

export default {
    title: "Profile/ProfileMenu",
    component: ProfileMenu,
    parameters: {
        backgrounds: {
            default: "won-dark",
        },
    },
} as Meta;

export const Default: Story<ProfileMenuProps> = (args) => (
    <ProfileMenu {...args} activeLink="/profile/me" />
);
