import Dropdown from "components/Dropdown";
import {
    AccountCircle,
    FavoriteBorder,
    ExitToApp,
} from "@styled-icons/material-outlined";
import { ChevronDown } from "@styled-icons/boxicons-regular/ChevronDown";
import * as S from "./styles";
import { UserDropdownProps } from "./types";
import Link from "next/link";
import { signOut } from "next-auth/react";

const UserDropdown = ({ username }: UserDropdownProps) => (
    <Dropdown
        title={
            <>
                <AccountCircle size={24} />
                <S.Username>{username}</S.Username>
                <ChevronDown size={24} />
            </>
        }
    >
        <S.Nav>
            <Link href="/profile/me" style={{ textDecoration: "none" }}>
                <S.Link>
                    <AccountCircle size={24} />
                    <span>My Profile</span>
                </S.Link>
            </Link>
            <Link href="/wishlist" style={{ textDecoration: "none" }}>
                <S.Link>
                    <FavoriteBorder size={24} />
                    <span>My Wishlist</span>
                </S.Link>
            </Link>
            <S.Link role="button" onClick={() => signOut()}>
                {" "}
                <ExitToApp size={24} />
                <span>Sign Out</span>
            </S.Link>
        </S.Nav>
    </Dropdown>
);

export default UserDropdown;
