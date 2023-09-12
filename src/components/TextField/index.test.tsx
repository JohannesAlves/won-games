import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TextField from ".";
import { render } from "utils/test-utils";
import React from "react";

describe("<TextField />", () => {
    it("Renders with Label", () => {
        render(<TextField label="Label" name="Label" />);

        expect(screen.getByLabelText("Label")).toBeInTheDocument();
    });

    it("Renders without Label", () => {
        render(<TextField />);

        expect(screen.queryByLabelText("Label")).not.toBeInTheDocument();
    });

    it("Renders with placeholder", () => {
        render(<TextField placeholder="hey you" />);

        expect(screen.getByPlaceholderText("hey you")).toBeInTheDocument();
    });

    it("Changes its value when typing", async () => {
        const onInputChange = jest.fn();
        render(
            <TextField
                onInputChange={onInputChange}
                label="TextField"
                name="TextField"
            />,
        );

        const input = screen.getByRole("textbox");
        const text = "This is my new text";
        userEvent.type(input, text);

        await waitFor(() => {
            expect(input).toHaveValue(text);
            expect(onInputChange).toHaveBeenCalledTimes(text.length);
        });
        expect(onInputChange).toHaveBeenCalledWith(text);
    });
});
