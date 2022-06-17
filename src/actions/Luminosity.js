import React,{useEffect, useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {modelActions} from "../redux/model/model";
import styles from "./Luminosity.module.css";

function Luminosity() {
  const dispatch = useDispatch();

  const exposure = useSelector(state => state.model.exposure);
  const shadowIntensity = useSelector(state => state.model.shadow_intensity);
  const shadowSoftness = useSelector(state => state.model.shadow_softness);

  function exposureHandler(e) {
    dispatch(modelActions.setExposure(e.target.value));
  }

  function shadowIntensityHandler(e) {
    dispatch(modelActions.setShadowIntensity(e.target.value));
  }

  function shadowSoftnessHandler(e) {
    dispatch(modelActions.setShadowSoftness(e.target.value));
  }


  return (
    <div>
      <div>
        <label>Exposure</label>
        <input type="range" min={0} max={2} step={0.1} value={exposure} onChange={exposureHandler}/>
      </div>
      <div>
        <label>Shadow Intensity</label>
        <input type="range" min={0} max={1} step={0.1} value={shadowIntensity} onChange={shadowIntensityHandler}/>
      </div>
      <div>
        <label>Shadow Softness</label>
        <input type="range" min={0} max={1} step={0.1} value={shadowSoftness} onChange={shadowSoftnessHandler}/>
      </div>
    </div>
  );
}

export default Luminosity;
