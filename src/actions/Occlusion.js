import React,{useState, useEffect} from "react";
import { useSelector } from "react-redux";
import NotImg from "../assets/alert-triangle.svg";
import styles from "./Occlusion.module.css";

function Occlusion() {
    const modelViewer = document.querySelector("model-viewer");
  const materialIndex = useSelector((state) => state.model.material_index);

  const [initialTexture, setInitialTexture] = useState();
  const [actualTexture, setActualTexture] = useState();

  const material = modelViewer.model.materials[materialIndex];

  function toggleInput() {
    document.getElementById("input-oc").click();
  }

  async function handleFile(e) {
    const material = modelViewer.model.materials[materialIndex];

    const newTexture = e.target.files[0];
    const imgTexture = URL.createObjectURL(newTexture);
    setActualTexture(imgTexture);
    const texture = await modelViewer.createTexture(imgTexture);
    material.occlusionTexture.setTexture(texture);
  }

  async function revertTexture() {
    const thumb = await initialTexture?.source?.createThumbnail(48, 48);
    setActualTexture(thumb);
    const material = modelViewer.model.materials[materialIndex];

    material.occlusionTexture.setTexture(initialTexture);
  }

  useEffect(() => {
    async function getThumb() {
      
      const thumb =
        await material?.occlusionTexture?.texture?.source?.createThumbnail(
          48,
          48
        );
      setInitialTexture(
        material.occlusionTexture.texture
      );
      setActualTexture(thumb);
    }
    getThumb();
  }, [materialIndex]);

  return (
    <div>
        <label>Occlusion Texture</label>
      <div>
        <img
          className={styles.img}
          src={actualTexture || NotImg}
          onClick={toggleInput}
        />
        <button onClick={revertTexture}>rev</button>
      </div>

      <input
        id="input-oc"
        style={{ display: "none" }}
        type="file"
        accept="images/*"
        onChange={handleFile}
      />
    </div>
  )
}

export default Occlusion;