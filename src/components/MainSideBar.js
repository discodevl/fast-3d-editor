import React, {useState} from 'react';
import styles from './MainSideBar.module.css';

function MainSideBar() {

    

  return (
    <div className={styles.container}>
        <button className={styles.btn}>1</button>
        <button className={styles.btn}>2</button>
        <button className={styles.btn}>3</button>
        <button className={styles.btn}>4</button>
    </div>
  )
}

export default MainSideBar;