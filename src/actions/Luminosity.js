import React,{useState} from "react";

function Luminosity() {
  const [exposure, setExposure] = useState();
  const modelViewer = document.querySelector("model-viewer");

  console.log(exposure)
  return (
    <div>
      <div>
        <label>Exposure</label>
        <input type="range" defaultValue={exposure} onChange={(e) => setExposure(e.target.value)}/>
      </div>
    </div>
  );
}

export default Luminosity;
