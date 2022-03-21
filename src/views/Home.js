import React from "react";
import workBlocks from "Data/works.json";
import WorkBlock from "Components/WorkBlock";

const Home = () => {
  return (
    <>
      <main data-scroll-container>
        <header className="c-hero" data-scroll-section>
          <div className="c-hero__wrapper" data-scroll data-scroll-speed="-2">
            <div className="c-hero__heading">
              <h1 className="c-hero__heading__title">
                <span>B</span>
                <span>e</span>
                <span>n</span>
                <span>o</span>
                <span>i</span>
                <span>t</span>
                <span>&nbsp;</span>
                <span>P</span>
                <span>e</span>
                <span>t</span>
                <span>i</span>
                <span>t</span>
              </h1>
            </div>
            <h2 className="c-hero__subtitle">modest frontend developer based in paris 🤠</h2>
          </div>
        </header>
        <div id="scroll-section">
          <section className="work-section" data-scroll-section>
            <div className="work-section__works o-wrapper">
              <h2 className="work-section__works__heading u-anim" data-scroll data-scroll-offset="0, -1000%">my works</h2>
              {workBlocks.map(workBlock => 
                <WorkBlock key={workBlock.id} />
              )}
              {/* <article class="work" data-scroll data-scroll-offset="10%, -1000%">
                <aside class="work__infos">
                  <div class="infos-container" data-scroll data-scroll-offset="20%, -1000%">
                    <div class="title-container">
                      <div class="title-container__icon" data-scroll data-scroll-offset="0, -1000%">
                        <span>.01</span>
                        <svg class="title-container__icon__svg" preserveAspectRatio="none"
                          viewBox="0 0 338 172">
                          <path vector-effect="non-scaling-stroke"
                            d="M169,3.5c91.1,0,165,36.9,165,82.5s-73.9,82.5-165,82.5S4,131.6,4,86C4,40.4,77.9,3.5,169,3.5">
                          </path>
                        </svg>
                      </div>
                      <h3 class="title-container__title">Spotify replica</h3>
                    </div>
                    <span class="underline"></span>
                  </div>
                  <figure class="img-container">
                    <img src="./src/ressources/images/spotify.jpg" alt="Spotify replica" />
                  </figure>
                </aside>
                <div class="work__content" data-scroll data-scroll-offset="0, -1000%" data-scroll-speed="-1">
                  <div class="hide-container" data-scroll>
                    <div class="h-div">
                      <p class="s-div">Made a spotify replica</p>
                    </div>
                    <div class="h-div">
                      <p class="s-div">using SCSS to enhance</p>
                    </div>
                    <div class="h-div">
                      <p class="s-div">basic CSS possibilities and</p>
                    </div>
                    <div class="h-div">
                      <p class="s-div">clearer file management.</p>
                    </div>
                    <div class="h-div">
                      <p class="s-div">Used vanilla Javascript</p>
                    </div>
                    <div class="h-div">
                      <p class="s-div">to manipulate music with</p>
                    </div>
                    <div class="h-div">
                      <p class="s-div">audio API</p>
                    </div>
                  </div>
                  <div class="no-hide">
                    <p>
                      Made a spotify replica using SCSS to enhance basic CSS possibilities and clearer file
                      management.<br />
                      Used vanilla Javascript to manipulate music with audio API.
                    </p>
                  </div>
                  <a href="./src/spotify.html" class="btn --light">
                    <span class="visible">View case</span>
                    <span class="hidden">View case</span>
                  </a>
                </div>
              </article>
              <article class="work" data-scroll data-scroll-offset="10%, -1000%">
                <aside class="work__infos">
                  <div class="infos-container" data-scroll data-scroll-offset="20%, -1000%">
                    <div class="title-container">
                      <div class="title-container__icon" data-scroll data-scroll-offset="0, -1000%">
                        <span>.02</span>
                        <svg class="title-container__icon__svg" preserveAspectRatio="none"
                          viewBox="0 0 338 172">
                          <path vector-effect="non-scaling-stroke"
                            d="M169,3.5c91.1,0,165,36.9,165,82.5s-73.9,82.5-165,82.5S4,131.6,4,86C4,40.4,77.9,3.5,169,3.5">
                          </path>
                        </svg>
                      </div>
                      <h3 class="title-container__title">Landing page</h3>
                    </div>
                    <span class="underline"></span>
                  </div>
                  <figure class="img-container">
                    <img src="./src/ressources/images/promo_card_slider.jpg" alt="Spotify replica" />
                  </figure>
                </aside>
                <div class="work__content" data-scroll data-scroll-offset="0, -1000%" data-scroll-speed="-1">
                  <div class="hide-container" data-scroll>
                    <div class="h-div">
                      <p class="s-div">Simple landing page with</p>
                    </div>
                    <div class="h-div">
                      <p class="s-div">several interresting</p>
                    </div>
                    <div class="h-div">
                      <p class="s-div">features such as sliders</p>
                    </div>
                    <div class="h-div">
                      <p class="s-div">but also 3D Object and</p>
                    </div>
                    <div class="h-div">
                      <p class="s-div">option to change language</p>
                    </div>
                  </div>
                  <div class="no-hide">
                    <p>
                      Simple landing page with several interresting features such as sliders but also 3D
                      Object and option to change language.
                    </p>
                  </div>
                  <a href="./src/promo.html" class="btn --light">
                    <span class="visible">View case</span>
                    <span class="hidden">View case</span>
                  </a>
                </div>
              </article>
              <article class="work" data-scroll data-scroll-offset="10%, -1000%">
                <aside class="work__infos">
                  <div class="infos-container" data-scroll data-scroll-offset="20%, -1000%">
                    <div class="title-container">
                      <div class="title-container__icon" data-scroll data-scroll-offset="0, -1000%">
                        <span>.03</span>
                        <svg class="title-container__icon__svg" preserveAspectRatio="none"
                          viewBox="0 0 338 172">
                          <path vector-effect="non-scaling-stroke"
                            d="M169,3.5c91.1,0,165,36.9,165,82.5s-73.9,82.5-165,82.5S4,131.6,4,86C4,40.4,77.9,3.5,169,3.5">
                          </path>
                        </svg>
                      </div>
                      <h3 class="title-container__title">Login system</h3>
                    </div>
                    <span class="underline"></span>
                  </div>
                  <figure class="img-container">
                    <img src="./src/ressources/images/login.jpg" alt="Login system" />
                  </figure>
                </aside>
                <div class="work__content" data-scroll data-scroll-offset="0, -1000%" data-scroll-speed="-1">
                  <div class="hide-container" data-scroll>
                    <div class="h-div">
                      <p class="s-div">Made a complete login</p>
                    </div>
                    <div class="h-div">
                      <p class="s-div">system + Google login</p>
                    </div>
                    <div class="h-div">
                      <p class="s-div">using MySQL database and</p>
                    </div>
                    <div class="h-div">
                      <p class="s-div">PHP to make requests.</p>
                    </div>
                    <div class="h-div">
                      <p class="s-div">Also using jQuery AJAX to</p>
                    </div>
                    <div class="h-div">
                      <p class="s-div">notify the user from errors.</p>
                    </div>
                  </div>
                  <div class="no-hide">
                    <p>
                      Made a complete login system + Google login using MySQL database and PHP to make
                      requests.<br />
                      Also using jQuery AJAX to notify the user from possible errors.
                    </p>
                  </div>
                  <a href="./src/login.html" class="btn --light">
                    <span class="visible">View case</span>
                    <span class="hidden">View case</span>
                  </a>
                </div>
              </article>
              <article class="work" data-scroll data-scroll-offset="10%, -1000%">
                <aside class="work__infos">
                  <div class="infos-container" data-scroll data-scroll-offset="20%, -1000%">
                    <div class="title-container">
                      <div class="title-container__icon" data-scroll data-scroll-offset="0, -1000%">
                        <span>.04</span>
                        <svg class="title-container__icon__svg" preserveAspectRatio="none"
                          viewBox="0 0 338 172">
                          <path vector-effect="non-scaling-stroke"
                            d="M169,3.5c91.1,0,165,36.9,165,82.5s-73.9,82.5-165,82.5S4,131.6,4,86C4,40.4,77.9,3.5,169,3.5">
                          </path>
                        </svg>
                      </div>
                      <h3 class="title-container__title">Instant chat</h3>
                    </div>
                    <span class="underline"></span>
                  </div>
                  <figure class="img-container">
                    <img src="./src/ressources/images/chat.jpg" alt="Instant chat" />
                  </figure>
                </aside>
                <div class="work__content" data-scroll data-scroll-offset="0, -1000%" data-scroll-speed="-1">
                  <div class="hide-container" data-scroll data-scroll-offset="0, -1000%">
                    <div class="h-div">
                      <p class="s-div">Simple live chat</p>
                    </div>
                    <div class="h-div">
                      <p class="s-div">built with jQuery AJAX</p>
                    </div>
                    <div class="h-div">
                      <p class="s-div">and PHP/MySQL stack,</p>
                    </div>
                    <div class="h-div">
                      <p class="s-div">with a basic sober</p>
                    </div>
                    <div class="h-div">
                      <p class="s-div">interface</p>
                    </div>
                  </div>
                  <div class="no-hide">
                    <p>
                      Simple live chat built with jQuery AJAX and PHP/MySQL stack, with a basic sober
                      interface.
                    </p>
                  </div>
                  <a href="./src/chat.html" class="btn --light">
                    <span class="visible">View case</span>
                    <span class="hidden">View case</span>
                  </a>
                </div>
              </article> */}
            </div>
            <div className="work-section__background" id="anchor" data-scroll data-scroll-repeat data-scroll-offset="32%">
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
