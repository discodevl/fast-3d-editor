import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modelActions } from "../redux/model/model";

function Metalness() {
  const dispatch = useDispatch();
  const materialIndex = useSelector((state) => state.model.material_index);
  const modelViewer = document.querySelector("model-viewer");
  const materialSelected = modelViewer.model.materials[materialIndex];

  const metalness = useSelector((state) => state.model.metalness);

  function metalnessHandler(e) {
    materialSelected.pbrMetallicRoughness.setMetallicFactor(e.target.value);
  }

  useEffect(() => {
    document.getElementById("range-metal").value = materialSelected.pbrMetallicRoughness.metallicFactor;
    console.log(materialSelected.pbrMetallicRoughness.metallicFactor);
  }, []);

  return (
    <div>
      <label>Metalness</label>
      <input
      id="range-metal"
        type="range"
        max="1.5"
        min="-1.5"
        step="0.1"
        onChange={metalnessHandler}
      />
    </div>
  );
}

export default Metalness;
