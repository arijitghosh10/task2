import Button from './Button';
import styles from './ProductManagement.module.css';

const ProductManagement = ()=>{
    return (
        <div className={styles.section3}>
            <div className={styles.explore}>
                <div>
                    <a href='#'>Product Management Like a Pro</a>
                </div>
                <div>
                    <Button />
                </div>
            </div>
            <div className={styles.picture}></div>
        </div>
    )
}
export default ProductManagement;