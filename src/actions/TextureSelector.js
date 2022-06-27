import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modelActions } from "../redux/model/model";
import BaseColor from "./BaseColor";
import Emissive from "./Emissive";
import MetallicRoughness from "./MetallicRoughness";

function TextureSelector() {
  const dispatch = useDispatch();

  const modelViewer = document.querySelector("model-viewer");

  const { materials } = modelViewer.model;

  console.log(materials)

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
      <MetallicRoughness />
      <BaseColor />
      <Emissive />
    </div>
  );
}

export default TextureSelector;
