import {useState} from 'react';
import ColorPicker from './ColorPicker';
import styles from './ColorPickerCloseable.module.css';

function ColorPickerCloseable({title, onSelectColor, revertColor}) {
    const [toggle, setToggle] = useState(false);

    function toggleHandler() {
        setToggle(toggle => !toggle);
    }

    function colorHandler(color) {
        onSelectColor(color);
    }

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <span className={styles.title} onClick={revertColor}>{title}</span>
            <div onClick={toggleHandler}>close</div>
        </div>
        <div className={styles.body} style={toggle ? {display: 'none'} : {display: 'block'}}>
            <ColorPicker onSelectColor={colorHandler}/>
        </div>
    </div>
  )
}

export default ColorPickerCloseable