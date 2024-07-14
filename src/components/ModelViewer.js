import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modelActions } from "../redux/model/model";
import glb from "../assets/Astronaut.glb";
import styles from "./ModelViewer.module.css";
import { Tooltip } from "react-tooltip";

function ModelViewer() {
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
      <div
        className={styles.options}
        data-tooltip-id="glb_tooltip"
        data-tooltip-content="Upload you own .glb file"
        onClick={handleBtnUpload}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-download"
          viewBox="0 0 16 16"
        >
          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
        </svg>
      </div>
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
