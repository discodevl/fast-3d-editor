import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modelActions } from "../redux/model/model";

function Roughness() {
  const dispatch = useDispatch();
  const materialIndex = useSelector((state) => state.model.material_index);
  const modelViewer = document.querySelector("model-viewer");
  const materialSelected = modelViewer.model.materials[materialIndex];

  const roughness = useSelector((state) => state.model.roughness);

  function roughnessHandler(e) {
    materialSelected.pbrMetallicRoughness.setRoughnessFactor(e.target.value);
  }

  useEffect(() => {
    document.getElementById("range-roughness").value = materialSelected.pbrMetallicRoughness.roughnessFactor;
    console.log(materialSelected.pbrMetallicRoughness.roughnessFactor);
  }, []);

  return (
    <div>
      <label>Roughness</label>
      <input
        id="range-roughness"
        type="range"
        max="1.5"
        min="-1.5"
        step="0.1"
        onChange={roughnessHandler}
      />
    </div>
  );
}

export default Roughness;
