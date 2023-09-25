import { screen } from "utils/test-utils";
import { render } from "utils/test-utils";

import Wishlist from ".";

import gamesMock from "components/GameCardSlider/mock";
import highlightMock from "components/Highlight/mock";

const props = {
    games: gamesMock,
    recommendedHighlight: highlightMock,
    recommendedGames: gamesMock,
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

jest.mock("templates/Base", () => ({
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
        return <div data-testid="Mock Base">{children}</div>;
    },
}));

jest.mock("components/ShowCase", () => ({
    __esModule: true,
    default: function Mock() {
        return <div data-testid="Mock Showcase" />;
    },
}));

describe("<Wishlist />", () => {
    it("should render correctly", () => {
        render(<Wishlist {...props} />);

        expect(screen.getByRole("heading", { name: /wishlist/i })).toBeInTheDocument();
        expect(screen.getAllByText(/population zero/i)).toHaveLength(6);
        expect(screen.getByTestId("Mock Showcase")).toBeInTheDocument();
    });

    it("should render empty when there are no games", () => {
        render(
            <Wishlist
                recommendedGames={gamesMock}
                recommendedHighlight={highlightMock}
            />,
        );

        expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument();

        expect(
            screen.getByRole("heading", { name: /your wishlist is empty/i }),
        ).toBeInTheDocument();
    });
});
