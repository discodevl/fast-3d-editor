import Luminosity from "../actions/Luminosity";
import Background from "../actions/Background";
import TextureSelector from "../actions/TextureSelector";
import Export from "../actions/Export";
import Doc from "../actions/Doc";
import styles from "./SideBar.module.css";

function SideBar({tab}) {

  return (
    <div className={styles.container}>
      <div className={styles.componentsWrapper} >
        {tab === 0 && <Doc />}
        {tab === 1 && <Luminosity />}
        {tab === 2 && <TextureSelector />}
        {tab === 3 && <Background />}
        {tab === 4 && <Export />}
      </div>
    </div>
  );
}

export default SideBar;
