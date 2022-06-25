import React, { useEffect, useState } from "react";
import Metalness from "./Metalness";
import Roughness from "./Roughness";
import { useSelector } from "react-redux";
import styles from "./MetallicRoughness.module.css";

function MetallicRoughness() {
  const [initialTexture, setInitialTexture] = useState();

  const modelViewer = document.querySelector("model-viewer");
  const materialIndex = useSelector((state) => state.model.material_index);

  function toggleInput() {
    document.getElementById("input-mt").click();
  }

  function handleFile(e) {
    const newTexture = e.target.files[0];
  }

  useEffect(() => {
    const material = modelViewer.model.materials[materialIndex];

    async function getThumb() {
      const thumb =
        await material.pbrMetallicRoughness.metallicRoughnessTexture.texture.source.createThumbnail(
          48,
          48
        );
      setInitialTexture(thumb);
    }

    getThumb();
  }, []);

  return (
    <div className={styles.container}>
      <label>Metallic Roughness Texture</label>
      <Metalness />
      <Roughness />
      <div>
        <img
          className={styles.img}
          src={initialTexture}
          onClick={toggleInput}
        />
      </div>
      <input
        id="input-mt"
        style={{ display: "none" }}
        type="file"
        accept="images/*"
        onChange={handleFile}
      />
    </div>
  );
}

export default MetallicRoughness;
