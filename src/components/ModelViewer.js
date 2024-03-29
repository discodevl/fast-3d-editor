import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {modelActions} from '../redux/model/model';
import glb from "../assets/Astronaut.glb";
import styles from "./ModelViewer.module.css";

function ModelViewer({isModelLoaded}) {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const exposure = useSelector((state) => state.model.exposure);
  const shadowIntensity = useSelector((state) => state.model.shadow_intensity);
  const shadowSoftness = useSelector((state) => state.model.shadow_softness);
  const src = useSelector((state) => state.model.src);

  const bgColor = useSelector((state) => state.config.background_color);

  function handleBtnUpload(e) {
    e.preventDefault();
    inputRef.current.click();
  }

  function handleFile(e) {
    const modelUpload = e.target.files[0];
    const src = URL.createObjectURL(modelUpload)
    dispatch(modelActions.setSrc(src));
  }

  function setDemoGlb() {
    dispatch(modelActions.setSrc(glb));
  }

  useEffect(() => {
    if(src) {
      isModelLoaded(true);
    } else{
      isModelLoaded(false);
    }
  }, [src]);

  return (
    <div className={styles.container} style={{backgroundColor: bgColor}}>
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
          <button className={styles.btn} onClick={setDemoGlb}>
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
