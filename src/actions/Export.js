import React from "react";

function Export() {
  let modelViewer = document.querySelector("model-viewer");

  async function saveHandler() {
    const glTF = await modelViewer.exportScene();
    let file = new File([glTF], "your-3dmodel.glb");

    var link = document.createElement("a");
    link.download = file.name;
    link.href = URL.createObjectURL(file);
    link.click();
  }

  return (
    <div>
      <button onClick={saveHandler}>Save</button>
    </div>
  );
}

export default Export;
