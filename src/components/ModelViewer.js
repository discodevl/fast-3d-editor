import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import styles from "./ModelViewer.module.css";

function ModelViewer() {

  const hideSideBar = useSelector(state => state.config.hide_side_bar);

  useEffect(() => {
    if(hideSideBar) {
      document.getElementById('mv').style.width = '94vw';
    } else {
      document.getElementById('mv').style.width = '76vw';
    }

  },[hideSideBar]);

  return (
    <div className={hideSideBar ? styles.containerLarge : styles.container}>
      <model-viewer
      id="mv"
        alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
        src="https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb" camera-controls
      ></model-viewer>
    </div>
  );
}

export default ModelViewer;
