import { screen } from "utils/test-utils";

import TextContent from ".";
import { render } from "utils/test-utils";

const props = {
    title: "description",
    content: `<h1>Content</h1>`,
};

describe("<TextContent />", () => {
    it("should render the heading", () => {
        render(<TextContent {...props} />);

        expect(screen.getByRole("heading", { name: /description/i })).toBeInTheDocument();
    });
});
