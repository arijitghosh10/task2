import EntrePic from "./EntrePic";
import styles from './entrepreneurship.module.css';
import ExploreEn from "./ExploreEn";

const Entrepreneurship = ()=>{
    return (
        <div className={styles.section1}>
          <EntrePic />
          <ExploreEn />
        </div>
    )
}
export default Entrepreneurship;