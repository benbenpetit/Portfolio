import "./assets/styles/styles.scss";
import { Route, Routes } from "react-router";
import Header from "Components/Header";
import Home from "Views/Home";
import About from "Views/About";
// import Contact from "Views/Contact";
import CaseStudy from "Views/CaseStudy";
import ErrorPage from "Views/ErrorPage";

const App = () => {
  return (
    <>
      <div className="loader"></div>
      <Header />
      <div className="page">
        <div className="scroll">
          <Routes>
            <Route path="/about" element={<About />} exact />
            {/* <Route path="/contact" element={<Contact />} exact /> */}
            <Route path="/case-study/:pathname" element={<CaseStudy />} exact />
            <Route path="/" element={<Home />} exact />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>

    </>
  );
};

export default App;
