export type MenuFullProps = {
    isOpen: boolean;
};

export type MenuProps = {
    username?: string | null | undefined;
    status?: "authenticated" | "loading" | "unauthenticated";
};
