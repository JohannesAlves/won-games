import { screen } from "utils/test-utils";
import { render } from "utils/test-utils";

import FormSignUp from ".";
import { MockedProvider } from "@apollo/client/testing";

describe("<FormSignUp />", () => {
    it("should render text and link to sign in", () => {
        render(
            <MockedProvider>
                <FormSignUp />
            </MockedProvider>,
        );

        expect(screen.getByRole("link", { name: /sign in/i })).toBeInTheDocument();
        expect(screen.getByText(/already have an account\?/i)).toBeInTheDocument();
    });
});
