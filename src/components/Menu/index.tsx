import { useState } from "react";
import Link from "next/link";

import { Menu2 as MenuIcon } from "@styled-icons/remix-fill/Menu2";
import { Search as SearchIcon } from "@styled-icons/material-outlined/Search";
import { Close as CloseIcon } from "@styled-icons/material-outlined/Close";

import Logo from "../../components/Logo";
import * as S from "./styles";
import Button from "../../components/Button";
import { MenuProps } from "./types";
import MediaMatch from "../../components/MediaMatch";
import CartDropdown from "components/CartDropdown";
import CartIcon from "components/CartIcon";
import UserDropdown from "components/UserDropdown";

export default function Menu({ username, status }: MenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <S.Wrapper>
            <MediaMatch lessThan="medium">
                <S.IconWrapper onClick={() => setIsOpen(true)}>
                    <MenuIcon aria-label="Open Menu" />
                </S.IconWrapper>
            </MediaMatch>

            <MediaMatch greaterThan="medium">
                <S.MenuNav>
                    <Link href="/" style={{ textDecoration: "none" }}>
                        <S.MenuLink>Home</S.MenuLink>
                    </Link>

                    <Link href="/games" style={{ textDecoration: "none" }}>
                        <S.MenuLink>Explore</S.MenuLink>
                    </Link>
                </S.MenuNav>
            </MediaMatch>

            <S.LogoWrapper>
                <Link href="/">
                    <Logo hiddeOnMobile />
                </Link>
            </S.LogoWrapper>

            {status !== "loading" && (
                <>
                    <S.MenuGroup>
                        <S.IconWrapper>
                            <SearchIcon aria-label="Search" />
                        </S.IconWrapper>
                        <S.IconWrapper>
                            <MediaMatch greaterThan="medium">
                                <CartDropdown />
                            </MediaMatch>
                            <MediaMatch lessThan="medium">
                                <Link href="/cart">
                                    <CartIcon />
                                </Link>
                            </MediaMatch>
                        </S.IconWrapper>
                        <MediaMatch greaterThan="medium">
                            {!username ? (
                                <Link href="/sign-in">
                                    <Button>Sign in</Button>
                                </Link>
                            ) : (
                                <UserDropdown username={username} />
                            )}
                        </MediaMatch>
                    </S.MenuGroup>

                    <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
                        <CloseIcon
                            aria-label="Close Menu"
                            onClick={() => setIsOpen(false)}
                        />
                        <S.MenuNav>
                            <Link href="/" style={{ textDecoration: "none" }}>
                                <S.MenuLink>Home</S.MenuLink>
                            </Link>
                            <Link href="/games" style={{ textDecoration: "none" }}>
                                <S.MenuLink>Explore</S.MenuLink>
                            </Link>

                            {!!username && (
                                <>
                                    <Link
                                        href="/profile/me"
                                        style={{ textDecoration: "none" }}
                                    >
                                        <S.MenuLink>My Profile</S.MenuLink>
                                    </Link>
                                    <Link
                                        href="/profile/wishlist"
                                        style={{ textDecoration: "none" }}
                                    >
                                        <S.MenuLink>Wishlist</S.MenuLink>
                                    </Link>
                                </>
                            )}
                        </S.MenuNav>

                        {!username && (
                            <S.RegisterBox>
                                <Link href="/sign-in">
                                    <Button fullWidth size="large">
                                        Sign In
                                    </Button>
                                </Link>
                                <span>or</span>
                                <S.CreateAccount href="/sign-up" title="Sign Up">
                                    Sign Up
                                </S.CreateAccount>
                            </S.RegisterBox>
                        )}
                    </S.MenuFull>
                </>
            )}
        </S.Wrapper>
    );
}
