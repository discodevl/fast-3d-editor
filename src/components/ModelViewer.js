import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import styles from "./ModelViewer.module.css";

function ModelViewer() {

  const exposure = useSelector(state => state.model.exposure);
  const shadowIntensity = useSelector(state => state.model.shadow_intensity);
  const shadowSoftness = useSelector(state => state.model.shadow_softness);

  const hideSideBar = useSelector(state => state.config.hide_side_bar);
  const bgColor = useSelector(state => state.config.background_color);

  useEffect(() => {
    if(hideSideBar) {
      document.getElementById('mv').style.width = '94vw';
    } else {
      document.getElementById('mv').style.width = '76vw';
    }

  },[hideSideBar]);

  return (
    <div className={hideSideBar ? styles.containerLarge : styles.container} style={{backgroundColor: bgColor}}>
      <model-viewer
      id="mv"
        alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
        src="https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb" camera-controls exposure={exposure} shadow-intensity={shadowIntensity} shadow-softness={shadowSoftness}
      ></model-viewer>
    </div>
  );
}

export default ModelViewer;
