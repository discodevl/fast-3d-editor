import React, { useEffect, useState } from "react";
import { configActions } from "../redux/config/config";
import { useDispatch, useSelector } from "react-redux";
import maximize from "../assets/maximize-2.svg";
import minimize from "../assets/minimize-2.svg";
import styles from "./SideBar.module.css";
import Luminosity from "../actions/Luminosity";

function SideBar(props) {
  const tab = props.tab;
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
        {tab === "1" && <Luminosity />}
        {tab === "2" && <div>lights</div>}
        {tab === "3" && <div>textures</div>}
        {tab === "4" && <div>export</div>}
      </div>
    </div>
  );
}

export default SideBar;
