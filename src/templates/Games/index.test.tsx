import { fireEvent, screen } from "@testing-library/react";
import { render } from "utils/test-utils";
import filterItemsMock from "components/ExploreSidebar/mock";
import { MockedProvider } from "@apollo/client/testing";

import Games from ".";
import { emptyGamesMock, fetchMoreMock, gamesMock } from "./mocks";
import apolloCache from "utils/apolloCache";
import userEvent from "@testing-library/user-event";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require("next/router"), "useRouter");
const push = jest.fn();

useRouter.mockImplementation(() => ({
    push,
    query: "",
    asPath: "",
    route: "/",
}));

jest.mock("templates/Base", () => ({
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
        return <div data-testid="Mock Base">{children}</div>;
    },
}));

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

describe("<Games />", () => {
    it("should render sections", async () => {
        render(
            <MockedProvider mocks={[gamesMock]}>
                <Games filterItems={filterItemsMock} />
            </MockedProvider>,
        );
        expect(await screen.findByText(/price/i)).toBeInTheDocument();
        expect(await screen.findByText(/sample game/i)).toBeInTheDocument();
        expect(
            await screen.findByRole("button", { name: /show more/i }),
        ).toBeInTheDocument();
    });

    it("should render empty when no games found", async () => {
        render(
            <MockedProvider mocks={[emptyGamesMock]}>
                <Games filterItems={filterItemsMock} />
            </MockedProvider>,
        );

        expect(
            await screen.findByText(/We not found any games with this filters/i),
        ).toBeInTheDocument();
    });

    it("should render loading when fetch more is called", async () => {
        render(
            <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
                <Games filterItems={filterItemsMock} />
            </MockedProvider>,
        );
        const button = await screen.findByRole("button", { name: /show more/i });

        fireEvent.click(button);

        const loading = await screen.findByAltText(/loading more games/i);

        expect(loading).toBeInTheDocument();
    });

    it("should render more games when show more is clicked", async () => {
        render(
            <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
                <Games filterItems={filterItemsMock} />
            </MockedProvider>,
        );

        expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument();

        userEvent.click(await screen.findByRole("button", { name: /show more/i }));

        expect(await screen.findByText(/Fetch More Game/i)).toBeInTheDocument();
    });

    it("should change push router when selecting a filter", async () => {
        render(
            <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
                <Games filterItems={filterItemsMock} />
            </MockedProvider>,
        );

        fireEvent.click(await screen.findByRole("checkbox", { name: /windows/i }));
        fireEvent.click(await screen.findByLabelText(/low to high/i));

        expect(push).toHaveBeenCalledWith({
            pathname: "/games",
            query: { platforms: ["windows"], sort_by: "low-to-high" },
        });
    });
});
