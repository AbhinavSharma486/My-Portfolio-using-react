import Header, { HeaderPhone } from "./component/Header";
import Home from "./component/Home";
import Work from "./component/Work";
import Timeline from "./component/Timeline";
import Services from "./component/Services";
import Testimonial from "./component/Testimonial";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import { Toaster } from "react-hot-toast";
import { useState } from "react";



function App() {

  const [menuOpen, setMenuOpen] = useState(false)



  return (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Work />
      <Timeline />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      <Toaster />
    </>
  )

}

export default App;
