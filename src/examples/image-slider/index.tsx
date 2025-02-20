import { OverflowSlider } from "@/slider";
import "./image-slider.style.scss";

const images = [
  "https://placehold.co/280x200@2x/000000/FFF/gif?text=Image+1",
  "https://placehold.co/280x200@2x/000000/FFF/gif?text=Image+2",
  "https://placehold.co/280x200@2x/000000/FFF/gif?text=Image+3",
  "https://placehold.co/280x200@2x/000000/FFF/gif?text=Image+4",
  "https://placehold.co/280x200@2x/000000/FFF/gif?text=Image+5",
  "https://placehold.co/280x200@2x/000000/FFF/gif?text=Image+6",
  "https://placehold.co/280x200@2x/000000/FFF/gif?text=Image+7",
  "https://placehold.co/280x200@2x/000000/FFF/gif?text=Image+8",
];

const ImageSlider = () => {
  return (
    <OverflowSlider gap={16}>
      {images.map((item) => (
        <img key={item} src={item} alt="" className="image-slider-item" />
      ))}
    </OverflowSlider>
  );
};

export default ImageSlider;
