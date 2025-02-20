import { ReactNode } from "react";
/**
 * Props types for OverflowSlider
 */
export type TOverflowSlider = {
  /** Child elements to display inside the slider */
  children: ReactNode[];
  /** Custom "Previous" button */
  prevButton?: ReactNode;
  /** Custom "Next" button */
  nextButton?: ReactNode;
  /** Gap between elements */
  gap?: number | string;
  /** Scroll animation duration (in milliseconds) */
  duration?: number;
};

type TButtonsVisibility = {
  prevButtonVisible: boolean;
  nextButtonVisible: boolean;
};

type TButtonsDisabled = {
  prevButtonDisabled: boolean;
  nextButtonDisabled: boolean;
};

export type TButtonsState = TButtonsVisibility & TButtonsDisabled;
