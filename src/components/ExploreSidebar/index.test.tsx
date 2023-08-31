import { fireEvent, screen } from "@testing-library/react";

import ExploreSidebar from ".";
import { renderWithTheme } from "utils/tests/helpers";
import items from "./mock";
import { css } from "styled-components";
import { Overlay } from "./styles";

describe("<ExploreSidebar />", () => {
    it("should render the headings", () => {
        renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn} />);

        expect(screen.getAllByRole("heading")).toHaveLength(4);
    });

    it("should render inputs", () => {
        renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn} />);

        expect(screen.getByRole("checkbox", { name: /free/i })).toBeInTheDocument();
        expect(screen.getByRole("radio", { name: /low to high/i })).toBeInTheDocument();
    });

    it("should render button", () => {
        renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn} />);

        expect(screen.getByRole("button", { name: /filter/i })).toBeInTheDocument();
    });

    it("should check initials values that are passed", () => {
        renderWithTheme(
            <ExploreSidebar
                onFilter={jest.fn}
                items={items}
                initialValues={{
                    platforms: ["windows"],
                    sort_by: "low-to-high",
                }}
            />,
        );

        expect(screen.getByRole("checkbox", { name: /windows/i })).toBeChecked();
        expect(screen.getByRole("radio", { name: /low to high/i })).toBeChecked();
    });

    it("should filter with initial values", () => {
        const onFilter = jest.fn();

        renderWithTheme(
            <ExploreSidebar
                items={items}
                initialValues={{
                    platforms: ["windows"],
                    sort_by: "low-to-high",
                }}
                onFilter={onFilter}
            />,
        );
        expect(onFilter).toBeCalledWith({
            platforms: ["windows"],
            sort_by: "low-to-high",
        });
    });

    it("should filter with checked values", () => {
        const onFilter = jest.fn();

        renderWithTheme(<ExploreSidebar items={items} onFilter={onFilter} />);
        const filterByWindows = screen.getByLabelText(/windows/i);
        const filterByLinux = screen.getByLabelText(/linux/i);
        const filterByLowToHigh = screen.getByLabelText(/low to high/i);

        fireEvent.click(filterByLowToHigh);
        fireEvent.click(filterByWindows);
        fireEvent.click(filterByLinux);

        expect(onFilter).toHaveBeenCalledTimes(4);

        expect(onFilter).toBeCalledWith({
            platforms: ["windows", "linux"],
            sort_by: "low-to-high",
        });
    });

    it("should altern between radio options", () => {
        const onFilter = jest.fn();

        renderWithTheme(<ExploreSidebar items={items} onFilter={onFilter} />);
        const filterByHighToLow = screen.getByLabelText(/high to low/i);
        const filterByLowToHigh = screen.getByLabelText(/low to high/i);

        fireEvent.click(filterByLowToHigh);
        fireEvent.click(filterByHighToLow);
        expect(onFilter).toBeCalledWith({ sort_by: "high-to-low" });
    });
});
