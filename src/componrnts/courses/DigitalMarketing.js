import Button from './Button';
import styles from './DigitalMarketing.module.css'
const DigitalMarketing = ()=>{
    return (
        <div className={styles.section2}>
           <div className={styles.picture1}></div>
           <div className={styles.info}>
                <div>
                    <a href='#'>Digital Marketing</a>
                </div>
                <div>
                    <Button />
                </div>
           </div>
           <div className={styles.picture2}></div>
        </div>
    )
} 
export default DigitalMarketing;