import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import revert from "../../assets/x-circle.svg";
import styles from "./MetallicRoughness.module.css";

function Metalness() {
  const dispatch = useDispatch();
  const materialIndex = useSelector((state) => state.model.material_index);
  const modelViewer = document.querySelector("model-viewer");
  const materialSelected = modelViewer.model.materials[materialIndex];

  const metalness = useSelector((state) => state.model.metalness);

  const [defaultValue, setDefaultValue] = useState([]);

  function metalnessHandler(e) {
    materialSelected.pbrMetallicRoughness.setMetallicFactor(e.target.value);
  }

  function revertValue() {
    document.getElementById("range-metal").value = defaultValue[materialIndex];
    materialSelected.pbrMetallicRoughness.setMetallicFactor(defaultValue[materialIndex]);
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
      <label>Metalness</label>
      <div>
        <input
          id="range-metal"
          type="range"
          max="1.5"
          min="-1.5"
          step="0.1"
          onChange={metalnessHandler}
        />
        <img
          className={styles.rev}
          alt="revert metalness"
          src={revert}
          onClick={revertValue}
        />
      </div>
    </div>
  );
}

export default Metalness;
