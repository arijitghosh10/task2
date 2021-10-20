import styles from './Button.module.css';
const Button = (props)=>{
    return (
        <button className={styles.button} onClick={props.onClick}>Explore Here</button>
    )
}
export default Button;