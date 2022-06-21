import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modelActions } from "../redux/model/model";
import Metalness from "./Metalness";
import Roughness from "./Roughness";

function TextureSelector() {
  const dispatch = useDispatch();

  const modelViewer = document.querySelector("model-viewer");

  const { materials } = modelViewer.model;

  function materialHandler(e) {
    dispatch(modelActions.setMaterialIndex(e.target.value));
  }

  return (
    <div>
      <select onChange={materialHandler}>   
        {materials.map((mat, i) => {
          return <option key={i} value={i}>{mat.name}</option>;
        })}
      </select>
      <Metalness />
      <Roughness />
    </div>
  );
}

export default TextureSelector;
