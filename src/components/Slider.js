import React from "react";
import styles from "./Slider.module.css";
import SliderInput from "react-input-slider";

function Slider({ id, title, onChange, value, min, max, step }) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      <div className={styles.sliderContainer}>
        <SliderInput
          id={id}
          styles={{
            track: {
              backgroundColor: "#b4b4b4",
              height: '8px',
              width: '10rem'
            },
            active: {
              // backgroundColor: '#fff'
            },
            thumb: {
              width: 15,
              height: 15,
            },
          }}
          axis="x"
          x={value}
          xmax={max}
          xmin={min}
          xstep={step}
          onChange={({ x }) => onChange(x)}
        />
      </div>
    </div>
  );
}

export default Slider;
