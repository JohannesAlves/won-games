import { screen } from "utils/test-utils";
import Footer from ".";
import { render } from "utils/test-utils";

describe("<Footer />", () => {
    // verificar se as 4 colunas existem

    it("should be render 4 columns topics", () => {
        render(<Footer />);

        expect(screen.getByRole("heading", { name: /contact us/i })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: /follow us/i })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: /links/i })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: /location/i })).toBeInTheDocument();
    });
});
