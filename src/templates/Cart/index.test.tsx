import { screen } from "utils/test-utils";
import { render } from "utils/test-utils";
import "../../../.jest/match-media-mock";
import gamesMock from "components/GameCardSlider/mock";
import highlightMock from "components/Highlight/mock";

import Cart from ".";

const mockSession = {
    id: "1",
    jwt: "123",
    user: {
        name: "John Doe",
    },
    expires: "",
};

jest.mock("next-auth/react", () => ({
    useSession: jest.fn(() => ({ data: mockSession })),
}));

const props = {
    session: mockSession,
    recommendedHighlight: highlightMock,
    recommendedGames: gamesMock,
    recommendedTitle: "hi",
};

jest.mock("templates/Base", () => ({
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
        return <div data-testid="Mock Base">{children}</div>;
    },
}));

jest.mock("components/CartList", () => ({
    __esModule: true,
    default: function Mock() {
        return <div data-testid="Mock Cart" />;
    },
}));

jest.mock("components/PaymentForm", () => ({
    __esModule: true,
    default: function Mock() {
        return <div data-testid="Mock PaymentForm" />;
    },
}));

jest.mock("components/Empty", () => ({
    __esModule: true,
    default: function Mock() {
        return <div data-testid="Mock Empty" />;
    },
}));

describe("<Cart />", () => {
    it("should render sections", () => {
        render(<Cart {...props} />);

        expect(screen.getByRole("heading", { name: /my cart/i })).toBeInTheDocument();
        expect(screen.getByTestId("Mock Cart")).toBeInTheDocument();
        expect(screen.getByTestId("Mock PaymentForm")).toBeInTheDocument();
        expect(screen.queryByTestId("Mock Empty")).not.toBeInTheDocument();
    });
});
