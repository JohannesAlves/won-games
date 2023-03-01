export type LineColors = "primary" | "secondary";

export type HeadingProps = {
    children: React.ReactNode;
    color?: "black" | "white";
    lineLeft?: boolean;
    lineBottom?: boolean;
    size?: "small" | "medium";
    lineColor?: LineColors;
};
