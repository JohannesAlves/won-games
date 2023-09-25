import { screen } from "utils/test-utils";
import { render } from "utils/test-utils";

import GameInfo from ".";

const props = {
    id: "1",
    title: "My Game Title",
    description: "Game Description",
    price: 210,
};

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

describe("<GameInfo />", () => {
    it("should render game informations", () => {
        render(<GameInfo {...props} />);

        expect(
            screen.getByRole("heading", { name: /my game title/i }),
        ).toBeInTheDocument();
        expect(screen.getByText(/\$210.00/)).toBeInTheDocument();
        expect(screen.getByText(/game description/i)).toBeInTheDocument();
    });

    it("should render buttons", () => {
        render(<GameInfo {...props} />);

        expect(screen.getByRole("button", { name: /add to cart/i })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /wishlist/i })).toBeInTheDocument();
    });
});
