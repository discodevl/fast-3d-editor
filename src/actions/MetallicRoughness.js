import React, { useEffect, useState } from "react";
import Metalness from "./MetallicRoughness/Metalness";
import Roughness from "./MetallicRoughness/Roughness";
import { useSelector } from "react-redux";
import TextureSelector from "../components/TextureSelector";

function MetallicRoughness() {
  const [initialTexture, setInitialTexture] = useState();
  const [actualTexture, setActualTexture] = useState();

  const modelViewer = document.querySelector("model-viewer");
  const materialIndex = useSelector((state) => state.model.material_index);

  const material = modelViewer.model.materials[materialIndex];


  async function fileHandler(e) {
    // const material = modelViewer.model.materials[materialIndex];

    const newTexture = e.target.files[0];
    const imgTexture = URL.createObjectURL(newTexture);
    setActualTexture(imgTexture);
    const texture = await modelViewer.createTexture(imgTexture);
    material.pbrMetallicRoughness.metallicRoughnessTexture.setTexture(texture);
  }

  async function revertTexture() {
    const thumb = await initialTexture?.source?.createThumbnail(48, 48);
    setActualTexture(thumb);
    // const material = modelViewer.model.materials[materialIndex];

    material.pbrMetallicRoughness.metallicRoughnessTexture.setTexture(
      initialTexture
    );
  }

  useEffect(() => {
    async function getThumb() {
      
      const thumb =
        await material?.pbrMetallicRoughness?.metallicRoughnessTexture?.texture?.source?.createThumbnail(
          48,
          48
        );
      setInitialTexture(
        material.pbrMetallicRoughness.metallicRoughnessTexture.texture
      );
      setActualTexture(thumb);
    }
    getThumb();
  }, [materialIndex]);

  return (
    <>
    <TextureSelector id='t1' title="Metallic Roughness Texture" fileHandler={fileHandler} revertTexture={revertTexture} actualTexture={actualTexture}/>
      <Metalness />
      <Roughness />
      </>
  );
}

export default MetallicRoughness;
