
import styles from '../page.module.css';

export default function({number, callback}){
   
    return (
        <button className={styles.button} onClick={callback}>{number}</button>
    )
}