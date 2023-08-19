import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TextField from ".";
import { renderWithTheme } from "../../utils/tests/helpers";
import React from "react";

describe("<TextField />", () => {
    it("Renders with Label", () => {
        renderWithTheme(<TextField label="Label" name="Label" />);

        expect(screen.getByLabelText("Label")).toBeInTheDocument();
    });

    it("Renders without Label", () => {
        renderWithTheme(<TextField />);

        expect(screen.queryByLabelText("Label")).not.toBeInTheDocument();
    });

    it("Renders with placeholder", () => {
        renderWithTheme(<TextField placeholder="hey you" />);

        expect(screen.getByPlaceholderText("hey you")).toBeInTheDocument();
    });

    it("Changes its value when typing", async () => {
        const onInput = jest.fn();
        renderWithTheme(
            <TextField onInput={onInput} label="TextField" name="TextField" />,
        );

        const input = screen.getByRole("textbox");
        const text = "This is my new text";
        userEvent.type(input, text);

        await waitFor(() => {
            expect(input).toHaveValue(text);
            expect(onInput).toHaveBeenCalledTimes(text.length);
        });
        expect(onInput).toHaveBeenCalledWith(text);
    });
});
