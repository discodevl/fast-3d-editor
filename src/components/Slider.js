import React, { useEffect } from "react";
import styles from "./Slider.module.css";

function Slider({ title, onChange, value, min, max, step }) {
  const slider = document.getElementById("slider");

  useEffect(() => {
    slider.style.background = '#ccc'
  }, [value]);

  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      <div className={styles.sliderContainer}>
        <span>{min}</span>
        <input
          id="slider"
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
        />
        <span>{max}</span>
      </div>
    </div>
  );
}

export default Slider;
