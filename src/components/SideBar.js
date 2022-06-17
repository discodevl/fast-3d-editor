import React, { useEffect, useState } from "react";
import { configActions } from "../redux/config/config";
import { useDispatch, useSelector } from "react-redux";
import maximize from "../assets/maximize-2.svg";
import minimize from "../assets/minimize-2.svg";
import styles from "./SideBar.module.css";
import Luminosity from "../actions/Luminosity";
import Background from "../actions/Background";
import TextureSelector from "../actions/TextureSelector";

function SideBar(props) {
  const dispatch = useDispatch();
  
  const hide = useSelector(state => state.config.hide_side_bar);

  function hideHandler(e) {
    e.preventDefault();
    dispatch(configActions.setHideSideBar());
  }

  return (
    <div className={styles.container} style={hide ? {width: "2vw"} : {width: "20vw"}}>
      {!hide ? <img src={minimize} onClick={hideHandler} /> : <img src={maximize} onClick={hideHandler} />}
      <div className={styles.componentsWrapper} style={hide ? {display: "none"} : {display: ""}}>
        {props.tab === 1 && <Luminosity />}
        {props.tab === 2 && <TextureSelector />}
        {props.tab === 3 && <Background />}
        {props.tab === 4 && <div>export</div>}
      </div>
    </div>
  );
}

export default SideBar;
