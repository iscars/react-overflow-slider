import CardSlider from "@/examples/card-slider";
import TagSlider from "@/examples/tag-slider";
import ImageSlider from "@/examples/image-slider";
import "./demo.style.scss";

const Examples = () => {
  return (
    <div className="container">
      <h2>Text Slider</h2>
      <small>
        Note: This slider demonstrates the `data-first-visible="true"` prop in
        action
      </small>
      <TagSlider />
      <h2>Card Slider</h2>
      <CardSlider />
      <h2>Image Slider</h2>
      <ImageSlider />
    </div>
  );
};

export default Examples;
