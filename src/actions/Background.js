import React from "react";

import { useDispatch, useSelector } from "react-redux";
import ColorPicker from "../components/ColorPicker";
import { configActions } from "../redux/config/config"; 
import styles from "./Background.module.css";

function Background() {
  const dispatch = useDispatch();

  // const color = useSelector(state => state.config.background_color);

  function colorHandler(color) {
    console.log(color);
    dispatch(configActions.setBackgroundColor(color));
  }

  return (
    <div className={styles.container}>
      <ColorPicker title="Background Color" onSelectColor={colorHandler}/>

      {/* <div className={styles.colorWrapper}>
        <label>Background Color</label>
        <HexColorPicker color={color} onChange={(color) => colorHandler(color)} />
      </div> */}
    </div>
  );
}

export default Background;
