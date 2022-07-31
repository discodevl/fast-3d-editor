import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import glb from "../assets/alpha-blend-litmus.glb";
import styles from "./ModelViewer.module.css";

function ModelViewer() {
  const inputRef = useRef();

  const [src, setSrc] = useState("");

  const exposure = useSelector((state) => state.model.exposure);
  const shadowIntensity = useSelector((state) => state.model.shadow_intensity);
  const shadowSoftness = useSelector((state) => state.model.shadow_softness);

  const hideSideBar = useSelector((state) => state.config.hide_side_bar);
  const bgColor = useSelector((state) => state.config.background_color);

  function handleBtnUpload(e) {
    e.preventDefault();
    inputRef.current.click();
  }

  function handleFile(e) {
    const modelUpload = e.target.files[0];
    setSrc(URL.createObjectURL(modelUpload));
  }

  useEffect(() => {
    if (hideSideBar) {
      // document.getElementById("mv").style.width = "94vw";
    } else {
      // document.getElementById("mv").style.width = "76vw";
    }
  }, [hideSideBar]);

  return (
    <div className={styles.container}>
      {!src ? (
        <div className={styles.subContainer}>
          <input
            ref={inputRef}
            type="file"
            accept=".glb"
            onChange={handleFile}
            style={{ display: "none" }}
          />
          <button className={styles.btn} onClick={handleBtnUpload}>
            Upload
          </button>
          <p className={styles.paragraph}>or</p>
          <button className={styles.btn} onClick={() => setSrc(glb)}>
            start
          </button>
        </div>
      ) : (
        <model-viewer
          id="mv"
          alt="model viewer with fast 3d editor"
          src={src}
          camera-controls
          exposure={exposure}
          shadow-intensity={shadowIntensity}
          shadow-softness={shadowSoftness}
        ></model-viewer>
      )}
    </div>
  );
}

export default ModelViewer;
