import { ArrowBackIos as ArrowLeft } from "@styled-icons/material-outlined/ArrowBackIos";
import { ArrowForwardIos as ArrowRight } from "@styled-icons/material-outlined/ArrowForwardIos";
import { Close } from "styled-icons/material-outlined";
import { useEffect, useRef, useState } from "react";

import Slider from "components/Slider";
import SlickSlider from "react-slick";
import { SliderSettings } from "components/Slider/types";

import * as S from "./styles";

import { GalleryProps } from "./types";

const commonSettings: SliderSettings = {
    infinite: false,
    lazyLoad: "ondemand",
    arrows: true,
    nextArrow: <ArrowRight aria-label="next image" />,
    prevArrow: <ArrowLeft aria-label="previous image" />,
};

const settings: SliderSettings = {
    ...commonSettings,
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 1375,
            settings: {
                arrows: false,
                slidesToShow: 3.2,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                slidesToShow: 2.2,
            },
        },
        {
            breakpoint: 570,
            settings: {
                arrows: false,
                slidesToShow: 1.2,
            },
        },
        {
            breakpoint: 375,
            settings: {
                arrows: false,
                slidesToShow: 1.1,
            },
        },
    ],
};

const modalSettings: SliderSettings = {
    ...commonSettings,
    slidesToShow: 1,
};

const Gallery = ({ items }: GalleryProps) => {
    const slider = useRef<SlickSlider>(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleKeyUp = ({ key }: KeyboardEvent) => {
            key === "Escape" && setIsOpen(false);
        };

        window.addEventListener("keyup", handleKeyUp);

        return () => window.removeEventListener("keyup", handleKeyUp);
    }, []);

    return (
        <S.Wrapper>
            <Slider ref={slider} settings={settings}>
                {items.map((item, index) => (
                    <img
                        role="button"
                        key={`thumb-${index}`}
                        src={item.src}
                        alt={`Thumb - ${item.label}`}
                        onClick={() => {
                            setIsOpen(true);
                            slider.current!.slickGoTo(index, true);
                        }}
                    />
                ))}
            </Slider>

            <S.Modal aria-label="modal" isOpen={isOpen} aria-hidden={!isOpen}>
                <S.CloseModal
                    role="button"
                    aria-label="close modal"
                    onClick={() => {
                        setIsOpen(false);
                    }}
                >
                    <Close size={40} />
                </S.CloseModal>

                <S.Content>
                    <Slider ref={slider} settings={modalSettings}>
                        {items.map((item, index) => (
                            <img
                                key={`gallery-${index}`}
                                src={item.src}
                                alt={`${item.label}`}
                            />
                        ))}
                    </Slider>
                </S.Content>
            </S.Modal>
        </S.Wrapper>
    );
};

export default Gallery;
