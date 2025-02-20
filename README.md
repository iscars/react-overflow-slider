# React Overflow Slider

[![NPM Version](https://img.shields.io/npm/v/react-overflow-slider.svg)](https://www.npmjs.com/package/react-overflow-slider)
[![Downloads](https://img.shields.io/npm/dt/react-overflow-slider.svg)](https://www.npmjs.com/package/react-overflow-slider)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Stars](https://img.shields.io/github/stars/iscars/react-overflow-slider.svg?style=social)](https://github.com/iscars/react-overflow-slider)

A lightweight, high-performance, and responsive **horizontal slider** for React that works smoothly across devices, including mobile touch and MacBook touchpads. It leverages native **CSS overflow-x: auto** for buttery-smooth scrolling, while providing **custom navigation buttons** for seamless user interaction.


## 🔗 Links

- 📦 [View on NPM](https://www.npmjs.com/package/react-overflow-slider)
- 💻 [GitHub Repository](https://github.com/iscars/react-overflow-slider)
- 🌐 [Live Demo](https://react-overflow-slider.netlify.app)

## ✨ Features

- 🚀 **Smooth and Native Scrolling** — No JS calculations during scroll, even on touch devices.
- 🎯 **Customizable** — Add your own navigation buttons and styles.
- 📱 **Responsive Design** — Fully adapts to different screen sizes.
- 🔥 **Supports Any Content** — Text, images, or custom HTML elements.
- ⚡ **Zero Lag** — Perfect for mobile swipes and MacBook touchpads.

## 📦 Installation

Using npm
```bash
npm install react-overflow-slider
```
Using yarn
```bash
yarn add react-overflow-slider
```

Using pnpm
```bash
pnpm add react-overflow-slider
```

## 🚀 Quick Start

```tsx
import { OverflowSlider } from 'react-overflow-slider';
import 'react-overflow-slider/dist/index.css'; // Import styles for the slider

const Example = () => {
  return (
    <OverflowSlider>
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
    </OverflowSlider>
  );
};
```

## ⚙️ Props

| Prop         | Type             | Default | Description                                                                                                                         |
|--------------|------------------|---------|-------------------------------------------------------------------------------------------------------------------------------------|
| **children** | `ReactNode[]`    | —       | **Required.** Child elements to display inside the slider.                                                                          |
| **prevButton** | `ReactNode`    | —       | Custom "Previous" button.                                                                                                           |
| **nextButton** | `ReactNode`    | —       | Custom "Next" button.                                                                                                               |
| **gap**      | `number \| string` | `0`   | Gap between elements inside the slider. You can use a number (for pixel values) or a CSS string (e.g., '4px', '1em') for the value. |
| **duration** | `number`         | `300`   | Scroll animation duration in milliseconds.                                                                                          |

## 📋 Examples
### 🔤 Text Slider

A simple text slider with dynamic tag sizes.

![Text Slider](https://github.com/user-attachments/assets/e4597a58-7a7d-47f4-bf13-3c2586b4ae43)

⚠️ **Note:** When using fonts with fractional widths, rounding issues may occur, causing scroll glitches. For consistent behavior across platforms, use universal fonts (e.g., system-native fonts, sans-serif).

💡 **Tip:** To use custom fonts while avoiding these issues, apply a transparent **sans-serif** font to set the correct element width, and overlay your desired font using absolute positioning. This way, the invisible font defines the size, while the visible text uses the custom font.

https://github.com/iscars/react-overflow-slider/tree/main/src/examples/tag-slider

---

### 🖼️ Image Slider

A clean image slider for showcasing images.

![Image Slider](https://github.com/user-attachments/assets/a4196949-eefc-4bfe-aa08-e9d396163ebd)

https://github.com/iscars/react-overflow-slider/tree/main/src/examples/image-slider

---

### 📇 Custom HTML Slider

A flexible slider for showcasing any custom HTML elements, demonstrated here with cards featuring titles and descriptions.

![Card Slider](https://github.com/user-attachments/assets/26fd1755-943f-418f-ae2d-1f448209e17a)

https://github.com/iscars/react-overflow-slider/tree/main/src/examples/card-slider

## 🛠️ Development

To begin local development:

1. **Clone the repo:**

```bash
git clone https://github.com/iscars/react-overflow-slider.git
```
2. **Install dependencies:**
```bash
pnpm install
```
3. **Run the project:**
```bash
pnpm dev
```

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).  
Feel free to use, modify, and distribute it as per the license terms. 🤝
