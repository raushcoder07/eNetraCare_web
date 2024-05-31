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
// import About from "./Component/About";

function App() {
  return (
    <Router>
    <Header/>
      <Routes>
        {/* <Contact/> */}
        <Route path="/ai-detection" element={<Ai/>}/>
        <Route path="/cataracts" element={<Cataract/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/resources" element={<Resources/>}/>

        <Route path="/about" element={<About/>}/>
        <Route path ="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>

    </Router>
  );
}

export default App;
