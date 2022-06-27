import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HexColorPicker, HexColorInput } from "react-colorful";
import styles from "./BaseColor.module.css";

function BaseColor() {
  const modelViewer = document.querySelector("model-viewer");

  const materialIndex = useSelector((state) => state.model.material_index);
  const [color, setColor] = useState();
  const [defaultColor, setDefaultColor] = useState();
  const [initialTexture, setInitialTexture] = useState();
  const [actualTexture, setActualTexture] = useState();
  const [openColor, setOpenColor] = useState(true);

  function toggleInput() {
    document.getElementById("input-bc").click();
  }

  async function handleFile(e) {
    const material = modelViewer.model.materials[materialIndex];

    const newTexture = e.target.files[0];
    const imgTexture = URL.createObjectURL(newTexture);
    setActualTexture(imgTexture);
    const texture = await modelViewer.createTexture(imgTexture);
    material.pbrMetallicRoughness.baseColorTexture.setTexture(texture);
  }

  function colorHandler(color) {
    const material = modelViewer.model.materials[materialIndex];
    setColor(color);

    const rgb = hexToRgb(color);
    const rgbArr = rgb
      .split(",")
      .map((numberString) => parseFloat(numberString));

    const newColor = [rgbArr[0] / 255, rgbArr[1] / 255, rgbArr[2] / 255];
    material.pbrMetallicRoughness.setBaseColorFactor(newColor);
  }

  function restoreColor() {
    const material = modelViewer.model.materials[materialIndex];
    material.pbrMetallicRoughness.setBaseColorFactor(defaultColor);
    const defaultColorHex = rgbToHex(
      defaultColor[0],
      defaultColor[2],
      defaultColor[1]
    );
    setColor(defaultColorHex);
  }

  async function revertTexture() {
    const thumb = await initialTexture.source.createThumbnail(48, 48);
    setActualTexture(thumb);
    const material = modelViewer.model.materials[materialIndex];

    material.pbrMetallicRoughness.baseColorTexture.setTexture(initialTexture);
  }

  useEffect(() => {
    const material = modelViewer.model.materials[materialIndex];

    async function getThumb() {
      const thumb =
        await material.pbrMetallicRoughness.baseColorTexture.texture.source.createThumbnail(
          48,
          48
        );
      setInitialTexture(material.pbrMetallicRoughness.baseColorTexture.texture);
      setActualTexture(thumb);
    }

    const rgba = material.pbrMetallicRoughness.baseColorFactor;
    const hex = rgbToHex(rgba[0], rgba[1], rgba[2]);
    console.log(hex);
    setColor(hex);
    setDefaultColor(rgba);
    getThumb();
  }, []);

  function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  function hexToRgb(hex) {
    let c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split("");
      if (c.length === 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = "0x" + c.join("");
      return `${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",")},1`;
    }
  }

  return (
    <div>
      <label>Base Color Texture</label>
      <div>
        <img className={styles.img} src={actualTexture} onClick={toggleInput} />
        <button onClick={revertTexture}>rev</button>
      </div>

      <input
        id="input-bc"
        style={{ display: "none" }}
        type="file"
        accept="images/*"
        onChange={handleFile}
      />

      <label>Base Color Factor</label>
      <button onClick={() => setOpenColor(!openColor)}>Toggle color</button>
      <div style={openColor ? { display: "" } : { display: "none" }}>
        <HexColorPicker
          className={styles.small}
          color={color}
          onChange={(color) => colorHandler(color)}
        />
        <HexColorInput
          className={styles.inputHex}
          color={color}
          onChange={(color) => colorHandler(color)}
        />
        <button onClick={restoreColor}>Rev</button>
      </div>
    </div>
  );
}

export default BaseColor;
