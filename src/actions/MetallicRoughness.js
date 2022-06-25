import React, { useEffect, useState } from "react";
import Metalness from "./MetallicRoughness/Metalness";
import Roughness from "./MetallicRoughness/Roughness";
import { useSelector } from "react-redux";
import styles from "./MetallicRoughness.module.css";

function MetallicRoughness() {
  const [initialTexture, setInitialTexture] = useState();
  const [actualTexture, setActualTexture] = useState();

  const modelViewer = document.querySelector("model-viewer");
  const materialIndex = useSelector((state) => state.model.material_index);

  function toggleInput() {
    document.getElementById("input-mt").click();
  }

  async function handleFile(e) {
    const material = modelViewer.model.materials[materialIndex];

    const newTexture = e.target.files[0];
    const imgTexture = URL.createObjectURL(newTexture)
    setActualTexture(imgTexture);
    const texture = await modelViewer.createTexture(imgTexture);
    material.pbrMetallicRoughness.metallicRoughnessTexture.setTexture(texture);
  }

  async function revertTexture() {
    const thumb = await initialTexture.source.createThumbnail(
      48,
      48
    );
    setActualTexture(thumb);
    const material = modelViewer.model.materials[materialIndex];

    material.pbrMetallicRoughness.metallicRoughnessTexture.setTexture(initialTexture);
  }

  useEffect(() => {
    const material = modelViewer.model.materials[materialIndex];

    async function getThumb() {
      const thumb =
        await material.pbrMetallicRoughness.metallicRoughnessTexture.texture.source.createThumbnail(
          48,
          48
        );
        setInitialTexture(material.pbrMetallicRoughness.metallicRoughnessTexture.texture);
      setActualTexture(thumb);
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
          src={actualTexture}
          onClick={toggleInput}
        />
        <button onClick={revertTexture}>rev</button>
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
