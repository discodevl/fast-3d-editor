import React, { useEffect, useState } from "react";
import styles from "./MainSideBar.module.css";
import SideBar from "./SideBar";

function MainSideBar() {
  const [tab, setTab] = useState(0);

  function toggleSideBar(event) {
    const { value } = event.target;
    
    setTab(value);
  }

  return (
    <div className={styles.container}>
      <button className={styles.btn} value={1} onClick={toggleSideBar}>
        1
      </button>
      <button className={styles.btn} value={2} onClick={toggleSideBar}>
        2
      </button>
      <button className={styles.btn} value={3} onClick={toggleSideBar}>
        3
      </button>
      <button className={styles.btn} value={4} onClick={toggleSideBar}>
        4
      </button>

      <SideBar tab={tab}/>
    </div>
  );
}

export default MainSideBar;
