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
import { getNextOffset } from "./utils/get-next-offset";
import { smoothScroll } from "./utils/smooth-scroll";
import { scrollToFirstVisible } from "./utils/scroll-to-first-visible";
import "./slider.style.scss";

const OverflowSlider: FC<TOverflowSlider> = ({
  children,
  prevButton,
  nextButton,
  gap = 0,
  duration = 300,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const scrollWidth = useRef(0);
  const initialScrollDone = useRef(false);

  const [buttonsState, setButtonsState] = useState<TButtonsState>({
    prevButtonVisible: false,
    nextButtonVisible: false,
    prevButtonDisabled: false,
    nextButtonDisabled: false,
  });

  const checkShowButtons = useCallback(() => {
    updateButtonsVisibility(scrollerRef.current!, setButtonsState);
  }, []);

  const setDisabledButtons = useCallback(() => {
    updateButtonsDisabled(setButtonsState, true);
    setTimeout(
      () => updateButtonsDisabled(setButtonsState, false),
      duration + 50,
    );
  }, [duration]);

  const scrollToOffset = useCallback(
    (offset: number) => {
      smoothScroll(scrollerRef.current!, offset, duration);
      setDisabledButtons();
    },
    [duration, setDisabledButtons],
  );

  const handleScrollPrevious = useCallback(() => {
    const offset = getPreviousOffset(scrollerRef.current!, itemsRef.current);
    scrollToOffset(offset);
  }, [scrollToOffset]);

  const handleScrollNext = useCallback(() => {
    const offset = getNextOffset(scrollerRef.current!, itemsRef.current);
    scrollToOffset(offset);
  }, [scrollToOffset]);

  const scrollToFirstVisibleCallback = useCallback(() => {
    scrollToFirstVisible(itemsRef, scrollToOffset, initialScrollDone);
  }, [scrollToOffset]);

  useEffect(() => {
    const handleResize = checkShowButtons;
    window.addEventListener("resize", handleResize);
    checkShowButtons();
    return () => window.removeEventListener("resize", handleResize);
  }, [checkShowButtons]);

  useEffect(() => {
    const currentScrollWidth = scrollerRef.current?.scrollWidth ?? 0;
    if (currentScrollWidth !== scrollWidth.current) {
      scrollWidth.current = currentScrollWidth;
      checkShowButtons();
      scrollToFirstVisibleCallback();
    }
  }, [children, checkShowButtons, scrollToFirstVisibleCallback]);

  return (
    <div className="react-overflow-slider-container">
      <div className="react-overflow-slider">
        <div className="react-overflow-slider__btn-container">
          <button
            type="button"
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
            {Children.map(children, (child: ReactNode, i) => {
              const isObject = typeof child === "object" && child !== null;
              const dataFirstVisible =
                isObject &&
                "props" in child &&
                child.props?.["data-first-visible"];

              return (
                <div
                  ref={(ref) => (itemsRef.current[i] = ref)}
                  className="react-overflow-slider__item"
                  data-first-visible={dataFirstVisible}
                  style={
                    gap && i < children.length - 1 ? { paddingRight: gap } : {}
                  }
                >
                  {child}
                </div>
              );
            })}
          </div>
        </div>

        <div className="react-overflow-slider__btn-container">
          <button
            type="button"
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
