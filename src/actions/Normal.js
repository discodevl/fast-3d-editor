import React,{useState, useEffect} from "react";
import { useSelector } from "react-redux";
import NotImg from "../assets/alert-triangle.svg";
import styles from "./Normal.module.css";

function Normal() {
  const modelViewer = document.querySelector("model-viewer");
  const materialIndex = useSelector((state) => state.model.material_index);

  const [initialTexture, setInitialTexture] = useState();
  const [actualTexture, setActualTexture] = useState();

  const material = modelViewer.model.materials[materialIndex];

  function toggleInput() {
    document.getElementById("input-nm").click();
  }

  async function handleFile(e) {
    const material = modelViewer.model.materials[materialIndex];

    const newTexture = e.target.files[0];
    const imgTexture = URL.createObjectURL(newTexture);
    setActualTexture(imgTexture);
    const texture = await modelViewer.createTexture(imgTexture);
    material.normalTexture.setTexture(texture);
  }

  async function revertTexture() {
    const thumb = await initialTexture?.source?.createThumbnail(48, 48);
    setActualTexture(thumb);
    const material = modelViewer.model.materials[materialIndex];

    material.normalTexture.setTexture(initialTexture);
  }
  
  useEffect(() => {
    async function getThumb() {
      
      const thumb =
        await material?.normalTexture?.texture?.source?.createThumbnail(
          48,
          48
        );
      setInitialTexture(
        material.normalTexture.texture
      );
      setActualTexture(thumb);
    }
    getThumb();
  }, [materialIndex]);


  return (
    <div>
      <label>Normal Texture</label>
      <div>
        <img
          className={styles.img}
          src={actualTexture || NotImg}
          onClick={toggleInput}
        />
        <button onClick={revertTexture}>rev</button>
      </div>

      <input
        id="input-nm"
        style={{ display: "none" }}
        type="file"
        accept="images/*"
        onChange={handleFile}
      />
    </div>
  );
}

export default Normal;
