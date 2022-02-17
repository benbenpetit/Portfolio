import './assets/styles/styles.scss';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRef } from 'react';
import { Route, useLocation, Switch } from 'react-router';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Header from './components/Header';

const App = () => {
  const containerRef = useRef(null);
  const pathname = useLocation();

  const checkScreenHeight = () => {
    if (window.innerHeight > containerRef.current.scrollHeight) return;
    document.querySelector('.c-scrollbar_thumb').removeAttribute('style');
  }

  return (
    <>
      <div className="loader"></div>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          repeat: true,
          lerp: 0.12,
          class: 'in-view',
          scrollbarContainer: document.getElementById('root')
        }}
        watch={[]}
        containerRef={containerRef}
        location={pathname}
        onLocationChange={(scroll) => {
          checkScreenHeight();
          scroll.scrollTo(0, { duration: 0, disableLerp: true });
        }}
      >
        <div className="page" data-scroll-container ref={containerRef}>
          <Header />
          <div className="scroll">
            <Switch>
              <Route path="/about" exact>
                <About />
              </Route>
              <Route path="/contact" exact>
                <Contact />
              </Route>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="*">
                <section data-scroll-section>
                  <h1>Error 404</h1>
                  <h1>Error 404</h1>
                  <h1>Error 404</h1>
                  <h1>Error 404</h1>
                  <h1>Error 404</h1>
                  <h1>Error 404</h1>
                </section>
              </Route>
            </Switch>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </>
  );
};

export default App;
