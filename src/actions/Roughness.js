import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modelActions } from "../redux/model/model";
import styles from "./Roughness.module.css";

function Roughness() {
  const dispatch = useDispatch();
  const materialIndex = useSelector((state) => state.model.material_index);
  const modelViewer = document.querySelector("model-viewer");
  const materialSelected = modelViewer.model.materials[materialIndex];

  const roughness = useSelector((state) => state.model.roughness);

  const [defaultValue, setDefaultValue] = useState();

  function roughnessHandler(e) {
    materialSelected.pbrMetallicRoughness.setRoughnessFactor(e.target.value);
  }

  function revertValue() {
    document.getElementById("range-roughness").value = defaultValue;
    materialSelected.pbrMetallicRoughness.setRoughnessFactor(defaultValue);
  }

  useEffect(() => {
    document.getElementById("range-roughness").value =
      materialSelected.pbrMetallicRoughness.roughnessFactor;
    setDefaultValue(materialSelected.pbrMetallicRoughness.roughnessFactor);
  }, []);

  return (
    <div className={styles.container}>
      <label>Roughness</label>
      <div>
        <input
          id="range-roughness"
          type="range"
          max="1.5"
          min="-1.5"
          step="0.1"
          onChange={roughnessHandler}
        />
        <button onClick={revertValue}>Rev</button>
      </div>
    </div>
  );
}

export default Roughness;
