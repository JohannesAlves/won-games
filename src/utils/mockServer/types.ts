export type LoginReqBody = {
    email: string;
};

export type ResetReqBody = {
    code: string;
    password: string;
    passwordConfirmation: string;
};
