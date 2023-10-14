import React, { useState } from 'react';
import './style.css';

const ColorPicker = () => {
  const colors = ['#FF5733', '#FFBD33', '#33FF5E', '#338CFF', '#D133FF', '#FF33F9', '#FF3364', '#33B4FF', '#33FFD1', '#A033FF'];
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="color-picker">
      <div className="color-box" style={{ backgroundColor: selectedColor }}></div>
      <div className="color-options">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-option"
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
