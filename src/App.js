import "./assets/styles/styles.scss";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useContext, useEffect, useRef } from "react";
import { Route, useLocation, Routes } from "react-router";
import Header from "Components/Header";
import Home from "Views/Home";
import About from "Views/About";
import Contact from "Views/Contact";
import CaseStudy from "Views/CaseStudy";
import ErrorPage from "Views/ErrorPage";
import { LoadingContext } from "Utils/context";

const App = () => {
  const containerRef = useRef(null);
  const location = useLocation();
  const { loadingStateRef } = useContext(LoadingContext);

  const checkScreenHeight = () => {
    if (window.innerHeight > containerRef.current.scrollHeight || !document.querySelector(".c-scrollbar_thumb")) return;
    document.querySelector(".c-scrollbar_thumb").removeAttribute("style");
  };

  useEffect(() => {
    loadingStateRef.current.classList.add('is-loaded');
  }, [loadingStateRef]);

  return (
    <LoadingProvider>
      <div className="loader"></div>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          repeat: true,
          lerp: 0.12,
          class: "in-view",
          scrollbarContainer: document.getElementById("root")
        }}
        watch={[]}
        containerRef={containerRef}
        location={location}
        onLocationChange={(scroll) => {
          checkScreenHeight();
          scroll.scrollTo(0, { duration: 0, disableLerp: true });
        }}
      >
        <div className="page" data-scroll-container ref={containerRef}>
          <Header />
          <div className="scroll">
            <Routes>
              <Route path="/about" element={<About />} exact />
              <Route path="/contact" element={<Contact />} exact />
              <Route path="/case-study/:pathname" element={<CaseStudy />} exact />
              <Route path="/" element={<Home />} exact />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </LoadingProvider>
  );
};

export default App;
