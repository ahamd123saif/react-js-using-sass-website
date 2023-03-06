 import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
 import Header from "./componant/Header";
 import "./styles/App.scss"
 import "./styles/header.scss"
 import Home from "./componant/Home";
 import Footer from "./componant/Footer";
import Contact from "./componant/Contact";
import Services from "./componant/Services";
import "./styles/media.scss"
 
 
function App() {
  return (
    <>
   <Router>
    <Header/>
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/contact"element={<Contact/>}/>
      <Route path="/services" element={<Services/>}/>
    </Routes>
    <Footer/>
   </Router>
    </>
  );
}

export default App;
