
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AppHero from "../components/Apphero";
import AppFeatures from "../components/Appfeatures";
import AppDownloadSteps from "../components/AppDownloadSteps";
import AppCta from "../components/Appcta";






const Appdownload = () => {
  return (
    <div>
      <Navbar/>
      <AppHero/>
      <AppFeatures/>
     < AppDownloadSteps/>
     <AppCta/>

      <Footer/>
     
    </div>
  );
};

export default Appdownload;

