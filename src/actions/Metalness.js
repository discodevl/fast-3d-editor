import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modelActions } from "../redux/model/model";
import styles from "./Metalness.module.css";

function Metalness() {
  const dispatch = useDispatch();
  const materialIndex = useSelector((state) => state.model.material_index);
  const modelViewer = document.querySelector("model-viewer");
  const materialSelected = modelViewer.model.materials[materialIndex];

  const metalness = useSelector((state) => state.model.metalness);

  const [defaultValue, setDefaultValue] = useState();

  function metalnessHandler(e) {
    materialSelected.pbrMetallicRoughness.setMetallicFactor(e.target.value);
  }

  function revertValue() {
    document.getElementById("range-metal").value = defaultValue;
    materialSelected.pbrMetallicRoughness.setMetallicFactor(defaultValue);
  }

  useEffect(() => {
    document.getElementById("range-metal").value =
      materialSelected.pbrMetallicRoughness.metallicFactor;
    setDefaultValue(materialSelected.pbrMetallicRoughness.metallicFactor);
  }, []);

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
        <button onClick={revertValue}>Rev</button>
      </div>
      
    </div>
  );
}

export default Metalness;
