import React from "react";
import NotImg from "../assets/alert-triangle.svg";
import SvgBack from './SvgBack';
import styles from "./TextureSelector.module.css";


function TextureSelector({ id, title, fileHandler, revertTexture, actualTexture }) {
  
  function toggleInput() {
    document.getElementById(id).click();
  }

  return (
    <div className={styles.container}>
      <label>{title}</label>
      <div className={styles.subContainer}>
        <img
          className={styles.img}
          src={actualTexture || NotImg}
          onClick={toggleInput}
        />
        <div className={styles.revert} onClick={revertTexture}>
        <SvgBack />

        </div>
        {/* <button className={styles.revert} onClick={revertTexture}>rev</button> */}
      </div>

      
      <input
        id={id}
        style={{ display: "none" }}
        type="file"
        accept="image/png, image/gif, image/jpeg,image/jpg"
        onChange={fileHandler}
      />
    </div>
  );
}

export default TextureSelector;
