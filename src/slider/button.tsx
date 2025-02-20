const SliderButton = ({ left }: { left?: boolean }) => {
  return (
    <div
      className={`react-overflow-slider-btn ${left ? "react-overflow-slider-btn--left" : ""} `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="8 4 16 12 8 20" />
      </svg>
    </div>
  );
};

export default SliderButton;
