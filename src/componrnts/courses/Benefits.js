import styles from './Benefits.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faCalendar, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
const Benefits = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.benefit}>
                <div className={styles.fontAwesome}>
                <FontAwesomeIcon icon={faChalkboardTeacher} />
                </div>
                <div className={styles.topic}>Expert Teachers</div>
                <div>
                    <p>
                        Our instructors are more adept at monitoring student problems and assessing their level of understanding and progress, and they provide much more relevant, useful feedback. We are experts in developing and testing hypotheses about learning difficulties or instructional strategies.
                    </p>
                </div>
            </div>
            <div className={styles.benefit}>
                <div className={styles.fontAwesome}>
                    <FontAwesomeIcon icon={faGlobe} />
                </div>
                <div className={styles.topic}>Online Community</div>
                <div>
                    <p>
                        Feel like home, with a "family of invisible friends".
                    </p>
                </div>
            </div>
            <div className={styles.benefit}>
                <div className={styles.fontAwesome}>
                <FontAwesomeIcon icon={faCalendar} />
                </div>
                <div className={styles.topic}>Flexible Curriculum</div>
                <div>
                    <p>
                        Our expert teachers design and curate the curriculum using best practices and careful consideration of how people learn and retain information with the ongoing tech trends in the professional domain. We've debated every facet of our methodology, from the order in which to teach concepts, the analogies used to clarify them and how exercises should be structured to deliver the maximum educational punch.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Benefits;