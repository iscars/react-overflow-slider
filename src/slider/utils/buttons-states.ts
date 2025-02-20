import { Dispatch, SetStateAction } from "react";
import { TButtonsState } from "@/slider/slider.types";

export function updateButtonsVisibility(
  scroller: HTMLDivElement,
  setButtonsState: Dispatch<SetStateAction<TButtonsState>>,
) {
  const { offsetWidth, scrollLeft, scrollWidth } = scroller;
  setButtonsState((state) => ({
    ...state,
    prevButtonVisible: scrollLeft > 0,
    nextButtonVisible: scrollLeft + offsetWidth < scrollWidth,
  }));
}

export function updateButtonsDisabled(
  setButtonsState: Dispatch<SetStateAction<TButtonsState>>,
  show: boolean,
) {
  setButtonsState((state) => ({
    ...state,
    prevButtonDisabled: show,
    nextButtonDisabled: show,
  }));
}
