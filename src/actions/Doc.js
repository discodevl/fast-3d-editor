import { Donate } from '../util/PayPal';
import styles from './Doc.module.css';


function Doc() {
  return (
    <div className={styles.container}>
        <h3>Welcome to fast 3d editor :)</h3>
        <p>First upload a '.glb' file to start editing, if you dont have a '.glb' file you can click start to edit a demo.</p>
        <p>Once you uploaded a model, the icons in the menu should be available. In the first icon theres the luminosity options, in the next icon you will find a selector with all the materials of the model and the texture settings, the changes will be applied to the selected material. The third option is for changing the background color (wont be saved), and then the save icon when you can save your modified model or discard the current model.</p>
        {/* <span>Did you enjoy fast 3d editor? Co<nsider donate a small amount to help the project: </span>> */}
        {/* <Donate /> */}
    </div>
  )
}

export default Doc