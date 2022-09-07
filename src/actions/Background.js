import React from "react";

import { useDispatch, useSelector } from "react-redux";
import ColorPicker from "../components/ColorPicker";
import { configActions } from "../redux/config/config";
import styles from "./Background.module.css";

function Background() {
  const dispatch = useDispatch();

  function colorHandler(color) {
    dispatch(configActions.setBackgroundColor(color));
  }

  return (
    <div className={styles.container}>
      <ColorPicker title="Background Color" onSelectColor={colorHandler} />
    </div>
  );
}

export default Background;
