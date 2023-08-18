import { screen } from "@testing-library/react";

import CartList from ".";
import mockItems from "./mock";
import { renderWithTheme } from "utils/tests/helpers";

describe("<CartList />", () => {
    it("should render the cart list", () => {
        renderWithTheme(<CartList items={mockItems} total="R$ 330,00" />);

        expect(screen.getAllByRole("heading")).toHaveLength(2);
        expect(screen.getByText("R$ 330,00")).toBeInTheDocument();
    });
});
