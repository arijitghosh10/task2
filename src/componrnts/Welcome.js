import styles from './Welcome.module.css'
import welcomeImg from '../assets/welcome.jpg'

const Welcome = ()=>{
    return (
        <div className={styles.container}>
            <div className={styles.heading1}>
                <span>Welcome to</span>
            </div>
            <div className={styles.heading2}>
                THE NEXT BIG THING
            </div>
            <div className={styles.btnDiv}>
                <a href="https://discord.com/invite/A8zBusy"><button>Join TEN Virtual Campus</button></a>
            </div>
        </div>
    )
}
export default Welcome;