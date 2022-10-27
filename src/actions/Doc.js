import { DonateApp } from '../util/PayPal';
import styles from './Doc.module.css';


function Doc() {
  return (
    <div className={styles.container}>
        <h3>Welcome to fast 3d editor :)</h3>
        <span>Enjoying editing 3d models? Consider to make a small donation!</span>
        <DonateApp />
    </div>
  )
}

export default Doc