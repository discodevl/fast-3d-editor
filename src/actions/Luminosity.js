import React,{useEffect, useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import Slider from "../components/Slider";
import {modelActions} from "../redux/model/model";
import styles from "./Luminosity.module.css";

function Luminosity() {
  const dispatch = useDispatch();

  const exposure = useSelector(state => state.model.exposure);
  const shadowIntensity = useSelector(state => state.model.shadow_intensity);
  const shadowSoftness = useSelector(state => state.model.shadow_softness);

  function exposureHandler(value) {
    dispatch(modelActions.setExposure(value));
  }

  function shadowIntensityHandler(value) {
    dispatch(modelActions.setShadowIntensity(value));
  }

  function shadowSoftnessHandler(value) {
    dispatch(modelActions.setShadowSoftness(value));
  }


  return (
    <div className={styles.container}>
      <div className={styles.titleWrap}>
      <span className={styles.title}>Lightining</span>
      </div>
      <Slider title="Exposure" min={0} max={2} step={0.1} value={exposure} onChange={exposureHandler}/>
      {/* SHADOW */}
      <span>Shadow</span>
      <Slider title="Intensity" min={0} max={1} step={0.1} value={shadowIntensity} onChange={shadowIntensityHandler}/>
      <Slider title="Softness" min={0} max={1} step={0.1} value={shadowSoftness} onChange={shadowSoftnessHandler}/>

    </div>
  );
}

export default Luminosity;
