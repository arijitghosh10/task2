import Entrepreneurship from "./entrepreneurship"
import styles from './Courses.module.css';
import DigitalMarketing from "./DigitalMarketing";
import ProductManagement from "./ProductManagement";
import BenefitsHeading from "./BenefitsHeading";
import Benefits from "./Benefits";
const Courses = ()=>{
   return (
     <section className={styles.allCourses}>
         <Entrepreneurship />
         <DigitalMarketing />
         <ProductManagement />
         <BenefitsHeading />
         <Benefits />
     </section>
   )
}
export default Courses;