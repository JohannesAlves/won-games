import { screen } from "utils/test-utils";

import FormProfile from ".";
import { render } from "utils/test-utils";

describe("<FormProfile />", () => {
    it("should render the profile form", () => {
        render(<FormProfile />);

        expect(screen.getByRole("heading", { name: /my profile/i })).toBeInTheDocument();
        expect(screen.getAllByRole("textbox")).toHaveLength(2);
        expect(screen.getByPlaceholderText("Type your password")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("New password")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /save/i })).toBeInTheDocument();
    });
});
