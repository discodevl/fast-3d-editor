import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SvgBack from "../../components/SvgBack";
import Slider from "../../components/Slider";
import styles from "./MetallicRoughness.module.css";

function Roughness() {
  const dispatch = useDispatch();
  const materialIndex = useSelector((state) => state.model.material_index);
  const modelViewer = document.querySelector("model-viewer");
  const materialSelected = modelViewer.model.materials[materialIndex];

  const roughness = useSelector((state) => state.model.roughness);
  const [roughnessValue, setRoughnessValue] = useState();

  const [defaultValue, setDefaultValue] = useState([]);

  function roughnessHandler(value) {
    materialSelected.pbrMetallicRoughness.setRoughnessFactor(value);
    setRoughnessValue(value);
  }

  function revertValue() {
    document.getElementById("range-roughness").value =
      defaultValue[materialIndex];
    materialSelected.pbrMetallicRoughness.setRoughnessFactor(
      defaultValue[materialIndex]
    );
    setRoughnessValue(defaultValue[materialIndex]);
  }

  useEffect(() => {
    const listDefault = [];
    document.getElementById("range-roughness").value =
      materialSelected.pbrMetallicRoughness.roughnessFactor;
    listDefault[materialIndex] =
      materialSelected.pbrMetallicRoughness.roughnessFactor;
    setDefaultValue([...listDefault]);
  }, []);

  useEffect(() => {
    const listDefault = [...defaultValue];
    document.getElementById("range-roughness").value =
      materialSelected.pbrMetallicRoughness.roughnessFactor;
    if (!defaultValue[materialIndex]) {
      listDefault[materialIndex] =
        materialSelected.pbrMetallicRoughness.roughnessFactor;
      setDefaultValue([...listDefault]);
    }
  }, [materialIndex]);

  return (
    <div className={styles.container}>
      <Slider id="range-roughness" title="Roughness" min={-1.5} max={1.5} step={0.1} value={roughnessValue} onChange={roughnessHandler} />
      <div className={styles.rev} onClick={revertValue}>
        <SvgBack />
      </div>
    </div>
  );
}

export default Roughness;
