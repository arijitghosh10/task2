import styles from './Consult.module.css';
import video from '../assets/consult.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
const Consult = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.text}>
                <h1>Power of TEN Consulting</h1>
                <button className={styles.explore}>Explore Here <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
            </div>
            <video autoPlay muted loop className={styles.bgVideo}>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
}
export default Consult;