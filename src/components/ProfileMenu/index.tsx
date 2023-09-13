import {
    AccountCircle,
    CreditCard,
    ExitToApp,
    FormatListBulleted,
} from "styled-icons/material-outlined";
import * as S from "./styles";
import { ProfileMenuProps } from "./types";
import { signOut } from "next-auth/react";

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
    <S.Nav>
        <S.Anchor
            href="/profile/me"
            isActive={activeLink === "/profile/me"}
            title="My Profile"
        >
            <AccountCircle size={24} />
            <span>My profile</span>
        </S.Anchor>

        <S.Anchor
            href="/profile/cards"
            isActive={activeLink === "/profile/cards"}
            title="My Cards"
        >
            <CreditCard size={24} />
            <span>My cards</span>
        </S.Anchor>

        <S.Anchor
            href="/profile/orders"
            isActive={activeLink === "/profile/orders"}
            title="My Orders"
        >
            <FormatListBulleted size={24} />
            <span>My orders</span>
        </S.Anchor>

        <S.Anchor role="button" onClick={() => signOut()}>
            <ExitToApp size={24} />
            <span>Sign Out</span>
        </S.Anchor>
    </S.Nav>
);

export default ProfileMenu;
