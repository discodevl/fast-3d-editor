import React from "react";
import { HexColorPicker } from "react-colorful";
import { useDispatch, useSelector } from "react-redux";
import { configActions } from "../redux/config/config"; 
import styles from "./Background.module.css";

function Background() {
  const dispatch = useDispatch();

  const color = useSelector(state => state.config.background_color);

  function colorHandler(color) {
    dispatch(configActions.setBackgroundColor(color));
  }

  return (
    <div>
      <div className={styles.colorWrapper}>
        <label>Background Color</label>
        <HexColorPicker color={color} onChange={(color) => colorHandler(color)} />
      </div>
    </div>
  );
}

export default Background;
