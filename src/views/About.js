import React from 'react';

const About = () => {
  return (
    <>
      <main>
        <header data-scroll-section>Header</header>
        <div className="scroll-section">
          <section data-scroll-section>About</section>
          <section data-scroll-section>Section 2</section>
          <section data-scroll-section>Section 3</section>
        </div>
      </main>
      <footer data-scroll-section>Footer</footer>
    </>
  );
};

export default About;
