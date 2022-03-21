import React from 'react'

const ErrorPage = () => {
  return (
    <>
      <main>
        <header data-scroll-section>Header</header>
        <div className="scroll-section">
          <section data-scroll-section>
            <h1>Page introuvable</h1>
          </section>
        </div>
      </main>
      <footer data-scroll-section>Footer</footer>
    </>
  )
}

export default ErrorPage