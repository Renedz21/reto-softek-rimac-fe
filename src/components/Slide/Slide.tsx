// Slider.tsx

import React, { useState } from "react";
import Styles from "./Slide.module.scss";
import { IPlan } from "../../models/data";
import { useWindowSize } from "../../hooks/useWindowSize";
import { DEVICE } from "../../utilities/constants";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

interface SliderProps {
  children: React.ReactNode;
  cards: IPlan[];
  cardsPerSlide?: number;
}

const Slider: React.FC<SliderProps> = ({
  children,
  cards,
  cardsPerSlide = 1,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width } = useWindowSize();

  const {
    container,
    containerTrack,
    containerTrack__card,
    containerIndicators,
    containerIndicators__indicator,
    containerInfo,
    containerInfo__prev,
    containerInfo__next,
  } = Styles;

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsPerSlide < cards.length ? prevIndex + cardsPerSlide : 0
    );
  };

  const cardWidth = `${100 / cardsPerSlide}%`;

  const isMobile = () => {
    if (!width) return false;

    return width <= DEVICE.MOBILE;
  };

  return (
    <div className={container}>
      <div
        className={containerTrack}
        style={{
          transform: `translateX(${-currentIndex * (100 / cardsPerSlide)}%)`,
        }}
      >
        {React.Children.map(children, (child) => (
          <div className={containerTrack__card} style={{ width: cardWidth }}>
            {child}
          </div>
        ))}
      </div>

      <div className={containerIndicators}>
        {Array.from({ length: Math.ceil(cards.length / cardsPerSlide) }).map(
          (_, index) => (
            <div
              key={index}
              className={`${containerIndicators__indicator} ${
                index === Math.floor(currentIndex / cardsPerSlide)
                  ? Styles["active"]
                  : ""
              }`}
              onClick={() => setCurrentIndex(index * cardsPerSlide)}
            />
          )
        )}
      </div>

      {isMobile() && (
        <div className={containerInfo}>
          <div className={containerInfo__prev} onClick={handlePrevClick}>
            <IoIosArrowDropleft />
          </div>

          <p>
            {currentIndex + 1} / {cards.length}
          </p>

          <div className={containerInfo__next} onClick={handleNextClick}>
            <IoIosArrowDropright />
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
