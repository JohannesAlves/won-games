import { UsersPermissionsRegisterInput } from "graphql/generated/globalTypes";

export type SignInValues = Omit<UsersPermissionsRegisterInput, "username">;

export type FieldErrors = {
    [key: string]: string;
};
