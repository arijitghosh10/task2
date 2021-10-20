import AboutUs from "./componrnts/AboutUs";
import Consult from "./componrnts/Consult";
import Courses from "./componrnts/courses/Courses";
import Footer from "./componrnts/Footer";
import Header from "./componrnts/Header";
import IntroPic from "./componrnts/IntroPic";
import Navbar from "./componrnts/Navbar";
import Testimonials from "./componrnts/Testimonials";
import Welcome from "./componrnts/Welcome";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <IntroPic />
      <AboutUs />
      <Welcome />
      <Courses />
      <Testimonials />
      <Consult />
      <Footer />
    </div>
  );
}

export default App;
