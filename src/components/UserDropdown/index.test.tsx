import { fireEvent, screen } from "@testing-library/react";

import UserDropdown from ".";
import { render } from "utils/test-utils";

describe("<UserDropdown />", () => {
    it("should render the username", () => {
        render(<UserDropdown username="username" />);

        expect(screen.getByText("username")).toBeInTheDocument();
    });

    it("should render the menu", () => {
        render(<UserDropdown username="username" />);
        const title = screen.getByText("username");

        fireEvent.click(title);
        expect(screen.getAllByRole("link")).toHaveLength(2);
    });
});
