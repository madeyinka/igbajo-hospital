import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Departments from "./components/Departments";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Management from "./components/Management";
import Services from "./components/Services";
import Directors from "./components/Directors";
import Fitness from "./components/Fitness";
import Inpatient from "./components/Inpatient";
import GeneralHealth from "./components/GeneralHealth";
import General from "./components/General";
import Laboratory from "./components/Laboratory";
import Donation from "./components/Donation";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <div className="App-header">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/department" exact element={<Departments />} />
          <Route path="/blog" exact element={<Blog />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/management" exact element={<Management />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/directors" exact element={<Directors />} />
          <Route path="/fitness" exact element={<Fitness />} />
          <Route path="/inpatient" exact element={<Inpatient />} />
          <Route path="/general-health" exact element={<GeneralHealth />} />
          <Route path="/general-consultation" exact element={<General />} />
          <Route path="/laboratory" exact element={<Laboratory />} />
          <Route path="/donation" exact element={<Donation />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
