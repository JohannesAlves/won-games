import { rest } from "msw";
import { LoginReqBody, ResetReqBody } from "./types";

export const handlers = [
    rest.post<LoginReqBody>(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
        (request, response, context) => {
            const { email } = request.body;

            //when got error
            if (email === "false@email.com") {
                return response(
                    context.status(400),
                    context.json({
                        error: "Bad Request",
                        message: [
                            {
                                messages: [
                                    {
                                        message: "This email does not exist",
                                    },
                                ],
                            },
                        ],
                    }),
                );
            }
            // when got success

            return response(
                context.status(200),
                context.json({
                    ok: true,
                }),
            );
        },
    ),
    rest.post<ResetReqBody>(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`,
        (request, response, context) => {
            const { code } = request.body;

            if (code === "wrong_code") {
                return response(
                    context.status(400),
                    context.json({
                        error: "Bad Request",
                        message: [
                            {
                                messages: [
                                    {
                                        message: "Incorrect code provided.",
                                    },
                                ],
                            },
                        ],
                    }),
                );
            }

            return response(
                context.status(200),
                context.json({
                    user: {
                        email: "valid@email.com",
                    },
                }),
            );
        },
    ),
];
