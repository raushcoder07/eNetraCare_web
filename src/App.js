import { BrowserRouter as Router ,Route ,Routes } from "react-router-dom";
// import header from "./Component/header";
import Home from "./Component/Home";
import Header from "./Header";
import Footer from "./Component/Footer";
import Contact from "./Component/Contact";
import About from "./Component/About";
import Ai from "./Component/Ai";
import Cataract from "./Component/Cataract";
import Services from "./Component/Services";
import Resources from "./Component/Resources";
import News from "./Component/News";
// import About from "./Component/About";
import Information from "./Component/Information";
import Tips from "./Component/Tips";
import Testimonials from "./Component/Testimonials";

function App() {
  return (
    <Router>
    <Header/>
      <Routes>
        {/* <Contact/> */}
        <Route path="/ai-detection" element={<Ai/>}/>
        <Route path="/cataracts" element={<Cataract/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/testimonials" element={<Testimonials/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/information" element={<Information/>}/>
        <Route path="/tips" element={<Tips/>}/>


        <Route path="/about" element={<About/>}/>
        <Route path ="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>

    </Router>
  );
}

export default App;
