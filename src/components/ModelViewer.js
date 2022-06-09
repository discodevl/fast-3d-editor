import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import styles from "./ModelViewer.module.css";

function ModelViewer() {

  const hideSideBar = useSelector(state => state.config.hide_side_bar);

  console.log(hideSideBar)

  useEffect(() => {
    if(hideSideBar) {
      // document.querySelector('model-viewer').style.width = '95vw'
    } else {
      // document.querySelector('model-viewer').style.width = '75vw'
    }

  },[hideSideBar]);

  return (
    <div className={styles.container}>
      <model-viewer
        alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
        src="https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb" camera-controls
      ></model-viewer>
    </div>
  );
}

export default ModelViewer;
