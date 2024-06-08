import { BrowserRouter as Router ,Route ,Routes } from "react-router-dom";
// import header from "./Component/header";
import Thin from "./Component/Thin";
import Eyecare from "./Component/Eyecare"
import Header from "./Header";
import Footer from "./Component/Footer";
import Contact from "./Component/Contact";
import About from "./Component/About";
import Cataract from "./Component/Cataract";
import Services from "./Component/Services";
import News from "./Component/News";
// import About from "./Component/About";
import Information from "./Component/Information";
import Tips from "./Component/Tips";
import Testimonials from "./Component/Testimonials";
import Blogs from "./Component/Blogs";

function App() {
  return (
    <Router>
    <Header/>
      <Routes>
        {/* <Contact/> */}
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/cataracts" element={<Cataract/>}/>
        <Route path="/services" element={<Services/>}/>

        <Route path="/testimonials" element={<Testimonials/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/information" element={<Information/>}/>
        <Route path="/tips" element={<Tips/>}/>


        <Route path="/about" element={<About/>}/>
        <Route path ="/" element={<Eyecare/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Thin/>
      <Footer/>

    </Router>
  );
}

export default App;
