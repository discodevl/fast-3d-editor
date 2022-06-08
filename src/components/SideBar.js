import React, { useEffect } from 'react';
import styles from "./SideBar.module.css";

function SideBar(props) {

    const tab = props.tab;

  return (
    <div className={styles.container}>
        {tab === '1' && <div>
            switches
        </div>}
        {tab === '2' && <div>
            lights    
        </div>}
        {tab === '3' && <div>
            textures    
        </div>}
        {tab === '4' && <div>
            export   
        </div>}
    </div>
  )
}

export default SideBar;