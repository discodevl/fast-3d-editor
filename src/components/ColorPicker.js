import { useState } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import styles from "./ColorPicker.module.css";

//colors must be hex
const PALLETE_PRIMARY = [
  "#ffffff",
  "#FF9999",
  "#99FF99",
  "#99CCFF",
  "#CC99FF",
  "#FFFF99",
  "#FFCC99",
];
const PALLETE_SECONDARY = [
  "#b4b4b4",
  "#FF3333",
  "#33FF33",
  "#3399FF",
  "#9933FF",
  "#FFFF33",
  "#FF9933",
];
const PALLETE_TERTIARY = [
  "#202020",
  "#CC0000",
  "#00CC00",
  "#0080FF",
  "#6600CC",
  "#CCCC00",
  "#CC6600",
];

function ColorPicker({ title, onSelectColor }) {
  const [toggleColorPicker, setToggleColorPicker] = useState(false);
  const [color, setColor] = useState("");

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
      <div className={styles.row}>
        {PALLETE_TERTIARY.map((color, i) => (
          <div
            key={i}
            className={styles.colorWrap}
            style={{ backgroundColor: color }}
            onClick={() => selectColor(color)}
          ></div>
        ))}
      </div>
      <div className={styles.colorPickerContainer}>
        <button className={styles.btn} onClick={toggleHandler}>
          Custom color
        </button>
        {toggleColorPicker ? (
          <div>
            <HexColorPicker
              className={styles.small}
              color={color}
              onChange={(color) => selectColor(color)}
            />
            #<HexColorInput
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
