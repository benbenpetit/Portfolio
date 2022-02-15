import "./assets/styles/styles.scss";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import { Routes, Route, useLocation } from "react-router";
import Home from "./views/Home";
import Work from "./views/Work";
import Contact from "./views/Contact";
import Header from "./components/Header";

function App() {
  const containerRef = useRef(null);
  const pathname = useLocation();

  return (
    <>
      <div className="loader"></div>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          repeat: true,
          lerp: 0.12,
          class: "in-view"
        }}
        watch={[]}
        containerRef={containerRef}
        location={pathname}
        onLocationChange={scroll => scroll.scrollTo(0, { duration: 0, disableLerp: true })}
        onUpdate={() => console.log('sheesh')}
      >
        <div className="page">
          <Header />
          <div className="scroll" data-scroll-container ref={containerRef}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work/:id" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </>
  );
}

export default App;
