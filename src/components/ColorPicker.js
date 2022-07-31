import { useState } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import styles from "./ColorPicker.module.css";

 //colors must be hex
const PALLETE_PRIMARY = [
  "aqua",
  "blue",
  "purple",
  "pink",
  "goldenrod",
  "brown",
  "black",
];
const PALLETE_SECONDARY = [
  "white",
  "rgb(180, 180, 180)",
  "yellow",
  "orange",
  "green",
  "red",
  "#A3F7B5",
];

function ColorPicker({ title, onSelectColor }) {
  const [toggleColorPicker, setToggleColorPicker] = useState(false);
  const [color, setColor] = useState('');

  function toggleHandler() {
    setToggleColorPicker((toggle) => !toggle);
  }

  function selectColor(color) {
    onSelectColor(color);
    setColor(color);
  }

  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      <div className={styles.row}>
        {PALLETE_PRIMARY.map((color, i) => (
          <div
            key={i}
            className={styles.colorWrap}
            style={{ backgroundColor: color }}
            onClick={() => selectColor(color)}
          ></div>
        ))}
      </div>
      <div className={styles.row}>
        {PALLETE_SECONDARY.map((color, i) => (
          <div
            key={i}
            className={styles.colorWrap}
            style={{ backgroundColor: color }}
            onClick={() => selectColor(color)}
          ></div>
        ))}
      </div>
      <div className={styles.colorPickerContainer}>
        <button className={styles.btn} onClick={toggleHandler}>Custom color</button>
        {toggleColorPicker ? (
          <div>
            <HexColorPicker
              className={styles.small}
              color={color}
              onChange={(color) => selectColor(color)}
            />
            <HexColorInput
              className={styles.inputHex}
              color={color}
              onChange={(color) => selectColor(color)}
            />{" "}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ColorPicker;
