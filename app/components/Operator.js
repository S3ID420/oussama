import styles from '../page.module.css';

export default function({operand, callback}){
   
    return (
        <button className={styles.button} onClick={callback}>{operand}</button>
    )
}