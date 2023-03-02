export type RibbonProps = {
    children: React.ReactNode;
    color?: RibbonColors;
    size?: RibbonSizes;
};

export type RibbonColors = "primary" | "secondary";
export type RibbonSizes = "normal" | "small";
