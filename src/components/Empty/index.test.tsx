import { render, screen } from "utils/test-utils";

import Empty from ".";

const props = {
    title: "a title",
    description: "a description",
};

describe("<Empty />", () => {
    it("should render the correctly", () => {
        render(<Empty {...props} hasLink />);

        expect(
            screen.getByRole("image", { name: /a gamer in a couch playing videogame/i }),
        ).toBeInTheDocument();

        expect(screen.getByRole("heading", { name: /a title/i })).toBeInTheDocument();
        expect(screen.getByText(/a description/i)).toBeInTheDocument();

        expect(
            screen.queryByRole("link", { name: /go back to the store/i }),
        ).toHaveAttribute("href", "/");
    });
});
