import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modelActions } from "../redux/model/model";
import glb from "../assets/Astronaut.glb";
import styles from "./ModelViewer.module.css";
import { Tooltip } from "react-tooltip";

function ModelViewer({ isModelLoaded }) {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const exposure = useSelector((state) => state.model.exposure);
  const shadowIntensity = useSelector((state) => state.model.shadow_intensity);
  const shadowSoftness = useSelector((state) => state.model.shadow_softness);
  const src = useSelector((state) => state.model.src);

  const bgColor = useSelector((state) => state.config.background_color);

  // function handleBtnUpload(e) {
  //   e.preventDefault();
  //   inputRef.current.click();
  // }

  function handleFile(e) {
    const modelUpload = e.target.files[0];
    const src = URL.createObjectURL(modelUpload);
    dispatch(modelActions.setSrc(src));
  }

  useEffect(() => {
    dispatch(modelActions.setSrc(glb));
  }, []);

  function handleBtnUpload(e) {
    e.preventDefault();
    inputRef.current.click();
  }

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept=".glb"
        onChange={handleFile}
        style={{ display: "none" }}
      />
      <button
        className={styles.options}
        data-tooltip-id="glb_tooltip"
        data-tooltip-content="Upload you own .glb"
        onClick={handleBtnUpload}
      >
        upd_ico
      </button>
      <Tooltip id="glb_tooltip" />
      <div className={styles.container} style={{ backgroundColor: bgColor }}>
        <model-viewer
          id="mv"
          alt="model viewer with fast 3d editor"
          src={src}
          camera-controls
          exposure={exposure}
          shadow-intensity={shadowIntensity}
          shadow-softness={shadowSoftness}
        ></model-viewer>
      </div>
    </>
  );
}

export default ModelViewer;
