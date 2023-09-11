import { screen } from "utils/test-utils";

import CartList from ".";
import mockItems from "./mock";
import { render } from "utils/test-utils";

describe("<CartList />", () => {
    it("should render the cart list", () => {
        render(<CartList items={mockItems} total="R$ 330,00" />);

        expect(screen.getAllByRole("heading")).toHaveLength(2);
        expect(screen.getByText("R$ 330,00")).toBeInTheDocument();
    });

    it("should render the button", () => {
        render(<CartList items={mockItems} total="R$ 330,00" hasButton />);

        expect(screen.getByText(/buy it now/i)).toBeInTheDocument();
    });

    it("should render <Empty /> if are no games", () => {
        render(<CartList items={[]} />);

        expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
        expect(screen.queryByText(/total/i)).not.toBeInTheDocument();
    });
});
