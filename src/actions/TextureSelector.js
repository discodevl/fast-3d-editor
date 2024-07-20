import { useDispatch } from "react-redux";
import { modelActions } from "../redux/model/model";
import BaseColor from "./BaseColor";
import Emissive from "./Emissive";
import MetallicRoughness from "./MetallicRoughness";
import Normal from "./Normal";
import Occlusion from "./Occlusion";
import styles from "./TextureSelector.module.css";

function TextureSelector() {
  const dispatch = useDispatch();

  const modelViewer = document.querySelector("model-viewer");

  const { materials } = modelViewer.model;

  function materialHandler(e) {
    dispatch(modelActions.setMaterialIndex(e.target.value));
  }

  return (
    <div className={styles.container}>
      <div className={styles.titleWrap}>
        <span className={styles.titleMain}>Textures</span>
      </div>
      <span className={styles.title}>Select material</span>
      <select className={styles.select} onChange={materialHandler}>
        {materials.map((mat, i) => {
          if (materials[i-1]?.name === mat.name) return;
          return (
            <option key={i} value={i}>
              {mat.name}
            </option>
          );
        })}
      </select>
      <MetallicRoughness />
      <BaseColor />
      <Emissive />
      <Occlusion />
      <Normal />
    </div>
  );
}

export default TextureSelector;
