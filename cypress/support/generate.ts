import { build, fake } from "@jackfranklin/test-data-bot";

export type User = {
    username: string;
    email: string;
    password: string;
};

export const createUser = build<User>("User", {
    fields: {
        username: fake((fake) => fake.internet.userName()),
        password: fake((fake) => fake.internet.password()),
        email: "",
    },
    postBuild: (user) => ({
        ...user,
        email: `${user.username.toLowerCase()}+e2e@wongames.com`,
    }),
});
