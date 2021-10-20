import styles from './EntrePic.module.css'

const EntrePic = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.courses}>
                Our Courses
            </div>
            <div className={styles.info}>
                <div className={styles.first}>
                    Your New
                </div>
                <div className={styles.second}>
                    Journey Begins Here,
                </div>
                <div className={styles.third}>
                    Today
                </div>
            </div>

        </div>
    )
}
export default EntrePic;