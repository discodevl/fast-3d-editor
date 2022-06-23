import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./BaseColor.module.css";

function BaseColor() {
  const modelViewer = document.querySelector("model-viewer");

  const materialIndex = useSelector((state) => state.model.material_index);

  function toggleInput() {
    document.getElementById("input-bc").click();
  }

  function handleFile(e) {
    const newTexture = e.target.files[0];

  }

  const [initialTexture, setInitialTexture] = useState();
  
  useEffect(() => {
    const material = modelViewer.model.materials[materialIndex];

    async function getThumb() {
      const thumb =
        await material.pbrMetallicRoughness.baseColorTexture.texture.source.createThumbnail(
          48,
          48
        );
      setInitialTexture(thumb);
    }
    getThumb();
  }, []);

  console.log(initialTexture);

  return (
    <div>
      <label>Base Color Texture</label>
      <div>
        <img className={styles.img} src={initialTexture} onClick={toggleInput}/>
      </div>

      <input
        id="input-bc"
        style={{ display: "none" }}
        type="file"
        accept="images/*"
        onChange={handleFile}
      />
      <div>
        <input type="range" />
      </div>
    </div>
  );
}

export default BaseColor;
