import { screen } from "@testing-library/react";

import TextContent from ".";
import { renderWithTheme } from "utils/tests/helpers";

const props = {
    title: "description",
    content: `<h1>Content</h1>`,
};

describe("<TextContent />", () => {
    it("should render the heading", () => {
        renderWithTheme(<TextContent {...props} />);

        expect(screen.getByRole("heading", { name: /description/i })).toBeInTheDocument();
    });
});
