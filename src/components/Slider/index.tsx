import { ForwardRefRenderFunction, forwardRef } from "react";
import SlickSlider from "react-slick";
import * as S from "./styles";
import { SliderProps } from "./types";

const Slider: ForwardRefRenderFunction<SlickSlider, SliderProps> = (
    { children, settings },
    ref,
) => {
    return (
        <S.Wrapper>
            <SlickSlider {...settings} ref={ref}>
                {children}
            </SlickSlider>
        </S.Wrapper>
    );
};

export default forwardRef(Slider);
