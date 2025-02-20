import { OverflowSlider } from "@/slider";
import "./card-slider.style.scss";

const cards = [
  {
    title: "Explore the World",
    description: "Discover amazing places and cultures.",
  },
  {
    title: "Tech Innovations",
    description: "Stay updated on tech trends.",
  },
  {
    title: "Healthy Living",
    description: "Tips for a balanced lifestyle.",
  },
  {
    title: "Creative Ideas",
    description: "Unleash your creativity with projects.",
  },
  {
    title: "Financial Freedom",
    description: "Manage money and build independence.",
  },
  {
    title: "Eco-Friendly Choices",
    description: "Make sustainable decisions easily.",
  },
  {
    title: "Master Your Skills",
    description: "Expert advice to level up skills.",
  },
  {
    title: "Future Trends",
    description: "Explore what’s coming next.",
  },
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

const CardSlider = () => {
  return (
    <div className="card-slider-wrapper">
      <OverflowSlider
        gap={12}
        nextButton={
          <div className="card-slider-item-button">
            <Icon />
          </div>
        }
        prevButton={
          <div className="card-slider-item-button">
            <Icon />
          </div>
        }
      >
        {cards.map(({ title, description }) => (
          <div key={title} className="card-slider-item">
            <div className="card-slider-item__title">{title}</div>
            <div className="card-slider-item__description">{description}</div>
          </div>
        ))}
      </OverflowSlider>
    </div>
  );
};

export default CardSlider;
