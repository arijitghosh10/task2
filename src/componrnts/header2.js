import styles from './header2.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faUser } from '@fortawesome/free-solid-svg-icons'

const Header2 = () => {
    return (
        <div className={styles.wrapper2}>
            <div className={styles.btnDiv}>
                <button className={styles.cartBtn}>
                    <FontAwesomeIcon icon={faCartPlus} />
                </button>
                <button className={styles.loginBtn}>
                    <div>
                    <FontAwesomeIcon icon={faUser} />
                    </div>
                    <span>Log In</span>
                </button>
            </div>
            <div className={styles.inputDiv}>
                <input type="text" placeholder="Search Here..." className={styles.search} />
            </div>
        </div>
    )
}
export default Header2;