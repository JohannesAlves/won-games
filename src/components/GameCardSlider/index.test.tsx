import "../../../.jest/match-media-mock";
import { screen } from "utils/test-utils";
import { render } from "utils/test-utils";

import GameCardSlider from ".";
import items from "./mock";

const mockSession = {
    jwt: "123",
    user: {
        name: "John Doe",
    },
    expires: "",
};

// Mock the useSession hook
jest.mock("next-auth/react", () => ({
    useSession: jest.fn(() => ({ data: mockSession })),
}));

describe("<GameSlider />", () => {
    it("should render with 4 active items", () => {
        const { container } = render(<GameCardSlider items={items} />);
        expect(container.querySelectorAll(".slick-active")).toHaveLength(4);
    });

    it("should render white arrows if color passed", () => {
        render(<GameCardSlider items={items} color="white" />);

        expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
            color: "#FAFAFA",
        });
        expect(screen.getByLabelText(/next games/i)).toHaveStyle({
            color: "#FAFAFA",
        });
    });
});
