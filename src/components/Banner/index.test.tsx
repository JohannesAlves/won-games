import { render } from "utils/test-utils";
import { screen } from "utils/test-utils";
import Banner from ".";

const args = {
    img: "https://source.unsplash.com/user/willianjusten/1042x580",
    title: "Defy death",
    subtitle: "<p>Play the new <strong>CrashLands</strong> season",
    buttonLabel: "Buy now",
    buttonLink: "/games/defy-death",
};
describe("<Banner />", () => {
    it("should render correctly", () => {
        const { container } = render(<Banner {...args} />);
        // verificar se o título, subtitle, imagem existe
        expect(screen.getByRole("heading", { name: /defy death/i })).toBeInTheDocument();

        expect(
            screen.getByRole("heading", { name: /play the new crashlands season/i }),
        ).toBeInTheDocument();

        expect(screen.getByRole("img", { name: /defy death/i })).toBeInTheDocument();

        expect(container.firstChild).toMatchSnapshot();
    });

    it("should render a ribbon", () => {
        render(
            <Banner
                {...args}
                ribbon="My Ribbon"
                ribbonSize="small"
                ribbonColor="secondary"
            />,
        );

        const ribbon = screen.getByText(/my ribbon/i);

        expect(ribbon).toBeInTheDocument();
        expect(ribbon).toHaveStyle({ backgroundColor: "#3CD3C1" });
        expect(ribbon).toHaveStyle({
            height: "2.6rem",
            fontSize: "1.2rem",
        });
    });
});
