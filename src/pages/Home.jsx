
import Features from "../components/Features";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Howitworks from "../components/Howitworks";
import Testimonial from "../components/Testimonial";
import Trusted from "../components/Trusted";
import Pricing from "../components/Pricing";
import Downloadapp from "../components/Downloadapp";
import FaqQuestion from "../components/faq-question";
import Footer from "../components/Footer";



const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Trusted/>
      <Howitworks/>
      <Features/>
      <Testimonial/>
      <Downloadapp/>
      <Pricing/>
      <FaqQuestion/>
      <Footer/>
     
    </div>
  );
};

export default Home;

