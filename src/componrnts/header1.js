import Title from "./title";
import styles from './header1.module.css';

const Header1 = () => {
    return (
        <div className={styles.wrapper1}>
            <Title />
            <div className={styles.image}>
                <img src="https://static.wixstatic.com/media/693073_ee31d3dcd4064037a097ec905d0c841b~mv2.jpg/v1/fill/w_100,h_80,al_c,q_80,usm_0.66_1.00_0.01/pp_edited.webp" alt="TEN"></img>
            </div>
        </div>
    )
}
export default Header1;