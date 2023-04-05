import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Checkbox from ".";
import { renderWithTheme } from "utils/tests/helpers";

describe("<Checkbox />", () => {
    it("should render the label", () => {
        renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />);

        expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();
        expect(screen.getByText(/checkbox label/i)).toHaveAttribute("for", "check");
    });

    it("should dispatch on check when status change", async () => {
        const onCheck = jest.fn();

        renderWithTheme(<Checkbox label="checkbox" onCheck={onCheck} />);

        expect(onCheck).not.toHaveBeenCalled();

        userEvent.click(screen.getByRole("checkbox"));
        await waitFor(() => {
            expect(onCheck).toHaveBeenCalledTimes(1);
        });

        expect(onCheck).toHaveBeenCalledWith(true);
    });

    it("should dispatch on check when status change", async () => {
        const onCheck = jest.fn();

        renderWithTheme(<Checkbox label="checkbox" onCheck={onCheck} isChecked />);

        userEvent.click(screen.getByRole("checkbox"));
        await waitFor(() => {
            expect(onCheck).toHaveBeenCalledTimes(1);
        });

        expect(onCheck).toHaveBeenCalledWith(false);
    });
});
