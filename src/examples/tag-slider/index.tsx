import { OverflowSlider } from "@/slider";
import "./tag-slider.style.scss";

const tags = [
  { text: "Bran", backgroundColor: "#A52A2A", color: "#FFFFFF" },
  { text: "Sunset Coral", backgroundColor: "#FF7F50", color: "#FFFFFF" },
  { text: "Lime Cream", backgroundColor: "#DFFF00", color: "#262626" },
  { text: "Aquatic Awe", backgroundColor: "#00CED1", color: "#FFFFFF" },
  { text: "Transcendent Pink", backgroundColor: "#FFC0CB", color: "#262626" },
  { text: "Crocus", backgroundColor: "#9966CC", color: "#FFFFFF" },
  { text: "Mocha Mousse", backgroundColor: "#8B4513", color: "#FFFFFF" },
  { text: "Future Dusk", backgroundColor: "#4B0082", color: "#FFFFFF" },
];

const Icon = () => (
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
);

const TagSlider = () => {
  return (
    <div className="tag-slider-wrapper">
      <OverflowSlider
        gap={8}
        prevButton={
          <div className="tag-slider-btn-container">
            <div className="tag-slider-btn">
              <Icon />
            </div>
          </div>
        }
        nextButton={
          <div className="tag-slider-btn-container">
            <div className="tag-slider-btn tag-slider-btn--next">
              <Icon />
            </div>
          </div>
        }
      >
        {tags.map(({ text, ...styles }) => (
          <div key={text} className="tag-slider-item" style={{ ...styles }}>
            {text}
          </div>
        ))}
      </OverflowSlider>
    </div>
  );
};

export default TagSlider;
