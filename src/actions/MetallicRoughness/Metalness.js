import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SvgBack from "../../components/SvgBack";
import Slider from "../../components/Slider";
import styles from "./MetallicRoughness.module.css";

function Metalness() {
  const dispatch = useDispatch();
  const materialIndex = useSelector((state) => state.model.material_index);
  const modelViewer = document.querySelector("model-viewer");
  const materialSelected = modelViewer.model.materials[materialIndex];

  const metalness = useSelector((state) => state.model.metalness);
  const [metalValue, setMetalValue] = useState();

  const [defaultValue, setDefaultValue] = useState([]);

  function metalnessHandler(value) {
    materialSelected.pbrMetallicRoughness.setMetallicFactor(value);
    setMetalValue(value);
  }

  function revertValue() {
    document.getElementById("range-metal").value = defaultValue[materialIndex];
    materialSelected.pbrMetallicRoughness.setMetallicFactor(
      defaultValue[materialIndex]
    );
    setMetalValue(defaultValue[materialIndex]);
  }

  useEffect(() => {
    const listDefault = [];
    document.getElementById("range-metal").value =
      materialSelected.pbrMetallicRoughness.metallicFactor;
    listDefault[materialIndex] =
      materialSelected.pbrMetallicRoughness.metallicFactor;
    setDefaultValue([...listDefault]);
  }, []);

  useEffect(() => {
    const listDefault = [...defaultValue];
    document.getElementById("range-metal").value =
      materialSelected.pbrMetallicRoughness.metallicFactor;
    if (!defaultValue[materialIndex]) {
      listDefault[materialIndex] =
        materialSelected.pbrMetallicRoughness.metallicFactor;
      setDefaultValue([...listDefault]);
    }
  }, [materialIndex]);

  return (
    <div className={styles.container}>
      <Slider
        id="range-metal"
        title="Metalness"
        value={metalValue}
        min={-1.5}
        max={1.5}
        step={0.1}
        onChange={metalnessHandler}
      />
      <div className={styles.rev} onClick={revertValue}>
        <SvgBack />
      </div>
      {/* <img
        className={styles.rev}
        alt="revert metalness"
        src={revert}
        onClick={revertValue}
      /> */}
    </div>
  );
}

export default Metalness;
