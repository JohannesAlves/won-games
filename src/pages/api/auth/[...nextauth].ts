import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

type GenericObject = {
    [key: string]: any;
};

const options: AuthOptions = {
    pages: {
        signIn: "/sign-in",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {},
            async authorize(credentials) {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };

                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/auth/local`,
                    {
                        method: "POST",
                        body: new URLSearchParams({ identifier: email, password }),
                    },
                );

                const data = await response.json();

                if (data.user) {
                    return { ...data.user, jwt: data.jwt };
                } else {
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async session({ session, token }: GenericObject) {
            // Send properties to the client, like an access_token and user id from a provider.
            session.jwt = token.jwt;
            session.id = token.id;

            return Promise.resolve(session);
        },

        async jwt({ token, user }: GenericObject) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.name = user.username;
                token.jwt = user.jwt;
            }

            return Promise.resolve(token);
        },
    },
};

export default NextAuth(options);
