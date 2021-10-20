import Header1 from "./header1"
import Header2 from "./header2"
import styles from './Header.module.css'

const Header = ()=>{
    return (
        <div className={styles.wrapper}>
            <Header1 />
            <Header2 />
        </div>
    )
}
export default Header;