import {
  Children,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import SliderButton from "./button";
import { TOverflowSlider, TButtonsState } from "./slider.types";
import {
  updateButtonsDisabled,
  updateButtonsVisibility,
} from "./utils/buttons-states";
import { getPreviousOffset } from "./utils/get-previous-offset";
import { smoothScroll } from "./utils/smooth-scroll";
import { getNextOffset } from "./utils/get-next-offset";
import "./slider.style.scss";

const OverflowSlider: FC<TOverflowSlider> = ({
  children,
  prevButton,
  nextButton,
  gap = 0,
  duration = 300,
}) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const scrollWidth = useRef(0);

  const [buttonsState, setButtonsState] = useState<TButtonsState>({
    prevButtonVisible: false,
    nextButtonVisible: false,
    prevButtonDisabled: false,
    nextButtonDisabled: false,
  });

  const checkShowButtons = useCallback(() => {
    if (scrollerRef.current) {
      updateButtonsVisibility(scrollerRef.current, setButtonsState);
    }
  }, [scrollerRef]);

  const setDisabledButtons = useCallback(() => {
    updateButtonsDisabled(setButtonsState, true);
    setTimeout(() => {
      updateButtonsDisabled(setButtonsState, false);
    }, duration + 50);
  }, [duration]);

  const handleScrollPrevious = useCallback(() => {
    if (scrollerRef.current && itemsRef?.current?.length) {
      const previousOffset = getPreviousOffset(
        scrollerRef.current,
        itemsRef.current,
      );
      smoothScroll(scrollerRef.current, previousOffset, duration);
      setDisabledButtons();
    }
  }, [scrollerRef, itemsRef, setDisabledButtons, duration]);

  const handleScrollNext = useCallback(() => {
    if (scrollerRef.current && itemsRef?.current?.length) {
      const nextOffset = getNextOffset(scrollerRef.current, itemsRef.current);
      smoothScroll(scrollerRef.current, nextOffset, duration);
      setDisabledButtons();
    }
  }, [scrollerRef, itemsRef, setDisabledButtons, duration]);

  useEffect(() => {
    const handleResize = checkShowButtons;
    window.addEventListener("resize", handleResize);
    checkShowButtons();
    return () => window.removeEventListener("resize", handleResize);
  }, [checkShowButtons]);

  useEffect(() => {
    if (
      scrollerRef.current &&
      scrollerRef.current.scrollWidth !== scrollWidth.current
    ) {
      checkShowButtons();
      scrollWidth.current = scrollerRef.current.scrollWidth;
    }
  }, [children, checkShowButtons]);

  return (
    <div className="react-overflow-slider-container">
      <div className="react-overflow-slider">
        <div className="react-overflow-slider__btn-container">
          <button
            type="button"
            role="button"
            aria-label="Scroll to previous"
            onClick={handleScrollPrevious}
            className={`react-overflow-slider__btn react-overflow-slider__btn--prev 
              ${buttonsState.prevButtonDisabled ? "react-overflow-slider__btn--disabled" : ""} 
              ${buttonsState.prevButtonVisible ? "react-overflow-slider__btn--visible" : ""}`}
            style={{ transition: `${duration}ms` }}
          >
            {prevButton || <SliderButton left />}
          </button>
        </div>
        <div
          ref={scrollerRef}
          className="react-overflow-slider__scroller"
          onScroll={checkShowButtons}
        >
          <div className="react-overflow-slider__body">
            {Children.map(children, (child: ReactNode, i) => (
              <div
                ref={(ref) => (itemsRef.current[i] = ref)}
                className="react-overflow-slider__item"
                style={{
                  ...(gap && i < children.length - 1 && { paddingRight: gap }),
                }}
              >
                {child}
              </div>
            ))}
          </div>
        </div>
        <div className="react-overflow-slider__btn-container">
          <button
            type="button"
            role="button"
            aria-label="Scroll to next"
            onClick={handleScrollNext}
            className={`react-overflow-slider__btn react-overflow-slider__btn--next  
              ${buttonsState.nextButtonDisabled ? "react-overflow-slider__btn--disabled" : ""} 
              ${buttonsState.nextButtonVisible ? "react-overflow-slider__btn--visible" : ""}`}
            style={{ transition: `${duration}ms` }}
          >
            {nextButton || <SliderButton />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OverflowSlider;
