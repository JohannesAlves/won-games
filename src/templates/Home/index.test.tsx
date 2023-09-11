import "../../../.jest/match-media-mock";
import { screen } from "utils/test-utils";
import { render } from "utils/test-utils";

import bannerMock from "components/BannerSlider/mock";
import gamesMock from "components/GameCardSlider/mock";
import highlightMock from "components/Highlight/mock";

import Home from ".";

const props = {
    slug: "population-zero",
    banners: bannerMock,
    newGames: [gamesMock[0]],
    mostPopularHighlight: highlightMock,
    mostPopularGames: [gamesMock[0]],
    upcommingGames: [gamesMock[0]],
    upcommingHighlight: highlightMock,
    freeGames: [gamesMock[0]],
    freeHighlight: highlightMock,
};

jest.mock("components/ShowCase", () => {
    return {
        __esModule: true,
        default: function Mock() {
            return <div data-testid="Mock ShowCase"></div>;
        },
    };
});

jest.mock("components/BannerSlider", () => {
    return {
        __esModule: true,
        default: function Mock() {
            return <div data-testid="Mock BannerSlider"></div>;
        },
    };
});

describe("<Home />", () => {
    it("should render banner and show cases", () => {
        render(<Home {...props} />);

        expect(screen.getAllByTestId("Mock ShowCase")).toHaveLength(4);
        expect(screen.getByTestId("Mock BannerSlider")).toBeInTheDocument();

        // banner
    });
});
