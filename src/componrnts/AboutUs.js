import styles from './AboutUs.module.css';
import students from '../assets/students.jpg'

const AboutUs = ()=>{
    return (
        <div className={styles.about}>
            <div className={styles.heading}>
                <h2>About Us</h2>
            </div>
            <div className={styles.content}>
                <div className={styles.info}>
                    <div className={styles.para}>Learning Together From the Comfort of Your Home</div>
                    <button className={styles.learnBtn}>Learn More</button>
                </div>
                <div className={styles.imageDiv}>
                    <img src={students} alt="students pic" />
                </div>
            </div>
        </div>
    )
}
 export default AboutUs;