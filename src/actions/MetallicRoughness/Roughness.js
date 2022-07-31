import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import revert from "../../assets/x-circle.svg";
import styles from "./MetallicRoughness.module.css";

function Roughness() {
  const dispatch = useDispatch();
  const materialIndex = useSelector((state) => state.model.material_index);
  const modelViewer = document.querySelector("model-viewer");
  const materialSelected = modelViewer.model.materials[materialIndex];

  const roughness = useSelector((state) => state.model.roughness);

  const [defaultValue, setDefaultValue] = useState([]);

  function roughnessHandler(e) {
    materialSelected.pbrMetallicRoughness.setRoughnessFactor(e.target.value);
  }

  function revertValue() {
    document.getElementById("range-roughness").value =
      defaultValue[materialIndex];
    materialSelected.pbrMetallicRoughness.setRoughnessFactor(
      defaultValue[materialIndex]
    );
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
      <label>Roughness</label>
      <input
        className={styles.slider}
        id="range-roughness"
        type="range"
        max="1.5"
        min="-1.5"
        step="0.1"
        onChange={roughnessHandler}
      />
      <img
        className={styles.rev}
        alt="revert roughness"
        src={revert}
        onClick={revertValue}
      />
    </div>
  );
}

export default Roughness;
