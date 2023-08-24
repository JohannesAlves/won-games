import { fireEvent, screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";
import filterItemsMock from "components/ExploreSidebar/mock";
import { MockedProvider } from "@apollo/client/testing";

import Games from ".";
import { fetchMoreMock, gamesMock } from "./mocks";
import apolloCache from "utils/apolloCache";

jest.mock("templates/Base", () => ({
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
        return <div data-testid="Mock Base">{children}</div>;
    },
}));

jest.mock("components/ExploreSidebar", () => ({
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
        return <div data-testid="Mock ExploreSidebar">{children}</div>;
    },
}));

describe("<Games />", () => {
    it("should render sections", async () => {
        renderWithTheme(
            <MockedProvider mocks={[gamesMock]}>
                <Games filterItems={filterItemsMock} />
            </MockedProvider>,
        );
        expect(await screen.findByTestId("Mock ExploreSidebar")).toBeInTheDocument();
        expect(await screen.findByText(/sample game/i)).toBeInTheDocument();
        expect(
            await screen.findByRole("button", { name: /show more/i }),
        ).toBeInTheDocument();
    });

    it("should show more games when fetch more is called", async () => {
        renderWithTheme(
            <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
                <Games filterItems={filterItemsMock} />
            </MockedProvider>,
        );

        const button = await screen.findByRole("button", { name: /show more/i });

        expect(await screen.findByText(/sample game/i)).toBeInTheDocument();

        fireEvent.click(button);

        expect(await screen.findByText(/fetch more game/i)).toBeInTheDocument();

        screen.logTestingPlaygroundURL();
    });
});
