import React from "react";
import styles from "./ModelViewer.module.css";

function ModelViewer() {
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
