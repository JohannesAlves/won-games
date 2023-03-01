import { screen } from "@testing-library/react";
import Footer from ".";
import { renderWithTheme } from "../../utils/tests/helpers";

describe("<Footer />", () => {
    // verificar se as 4 colunas existem

    it("should be render 4 columns topics", () => {
        renderWithTheme(<Footer />);

        expect(screen.getByRole("heading", { name: /contact us/i })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: /follow us/i })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: /links/i })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: /location/i })).toBeInTheDocument();
    });
});
