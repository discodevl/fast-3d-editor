import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import lightSvg from "../assets/lightbulb.svg";
import textureSvg from "../assets/image.svg";
import paletteSvg from "../assets/palette.svg";
import saveSvg from "../assets/save.svg";
import styles from "./MainSideBar.module.css";

function MainSideBar() {
  const [tab, setTab] = useState(0);

  function toggleSideBar(event) {
    const value = event.target.value;
    console.log(event.target.value)
    setTab(value);
  }
  return (
    <div className={styles.container}>
      <img src={lightSvg} className={styles.ico} value={1} onClick={toggleSideBar}/>
      <img src={textureSvg} className={styles.ico} value={2} onClick={toggleSideBar} />
      <img src={paletteSvg} className={styles.ico} value={3} onClick={toggleSideBar} />
      <img src={saveSvg} className={styles.ico} value={4} onClick={toggleSideBar} />

      <SideBar tab={tab}/>
    </div>
  );
}

export default MainSideBar;
