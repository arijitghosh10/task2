import Button from './Button';
import styles from './ExploreEn.module.css';

const ExploreEn = () => {
    return (
        <div className={styles.explore}>
            <div className={styles.para}>
                <a href='#'>Entrepreneurship made fun</a>
            </div>
            <div className={styles.btnDiv}>
                <Button />
            </div>
        </div>
    )
}
export default ExploreEn;