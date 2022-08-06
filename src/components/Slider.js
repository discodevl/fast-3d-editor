import React, { useEffect } from "react";
import styles from "./Slider.module.css";
import SliderInput from 'react-input-slider';

function Slider({ title, onChange, value, min, max, step }) {

  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      <div className={styles.sliderContainer}>
        <SliderInput axis="x" x={value} xmax={max} xmin={min} xstep={step} onChange={({x}) => onChange(x)}/>
      </div>
    </div>
  );
}

export default Slider;
