import React from "react";
import { useDispatch } from "react-redux";
import { modelActions } from "../redux/model/model";
import styles from './Export.module.css';

function Export() {
  const dispatch = useDispatch();
  let modelViewer = document.querySelector("model-viewer");

  async function saveHandler() {
    const glTF = await modelViewer.exportScene();
    let file = new File([glTF], "your-3dmodel.glb");

    var link = document.createElement("a");
    link.download = file.name;
    link.href = URL.createObjectURL(file);
    link.click();
  }

  function discardHandler() {
    //to fix
    const mv = document.querySelector('model-viewer');
    mv.src = "";
    dispatch(modelActions.setSrc(''));
  }

  return (
    <div className={styles.container}>
      {/* <button className={styles.btn} onClick={discardHandler}>Discard Model</button> */}

      <button className={styles.btn} onClick={saveHandler}>Export</button>
    </div>
  );
}

export default Export;
