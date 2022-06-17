import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import lightSvg from "../assets/lightbulb.svg";
import textureSvg from "../assets/image.svg";
import paletteSvg from "../assets/palette.svg";
import saveSvg from "../assets/save.svg";
import styles from "./MainSideBar.module.css";

function MainSideBar() {
  const [tab, setTab] = useState(0);

  function toggleSideBar(value) {
   setTab(value);
  }

  return (
    <div className={styles.container}>
      <img src={lightSvg} className={styles.ico} onClick={() => toggleSideBar(1)} />
      <img src={textureSvg} className={styles.ico} onClick={() => toggleSideBar(2)} />
      <img src={paletteSvg} className={styles.ico} onClick={() => toggleSideBar(3)} />
      <img src={saveSvg} className={styles.ico} onClick={() => toggleSideBar(4)} />

      <SideBar tab={tab}/>
    </div>
  );
}

export default MainSideBar;
