
import Hardwarehero from "../components/Hardwarehero";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import Categories from "../components/Categories";
import Bundle from "../components/Bundle"
import Support from "../components/Support";
import Product from "../components/Product";




const Hardware = () => {
  return (
    <div>
      <Hardwarehero />
      <Categories/>
      <Product/>
      <Experience/>
      <Bundle/>
      <Support/>
      <Footer/>
     
    </div>
  );
};

export default Hardware;

