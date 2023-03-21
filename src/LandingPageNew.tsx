import React from 'react'

import './LandingPageNew.css'

const Scriblelandingpage = (props) => {
  return (
    <div>
      <div className="scriblelandingpage-navbar-logo-left">
        <div className="scriblelandingpage-navbar-container">
          <div className="scriblelandingpage-navbar-content">
            <div className="scriblelandingpage-container1">
              <div className="scriblelandingpage-navbar-brand"></div>
              <span className="scriblelandingpage-text">
                <span>Scrible</span>
              </span>
            </div>
            <div className="scriblelandingpage-navbar-menu">
              <div className="scriblelandingpage-navbar-link">
                <span className="scriblelandingpage-text02">
                  <span>About</span>
                </span>
              </div>
              <div className="scriblelandingpage-navbar-link1">
                <span className="scriblelandingpage-text04">
                  <span>Contact</span>
                </span>
              </div>
              <div className="scriblelandingpage-navbar-link2"></div>
              <button className="scriblelandingpage-button">
                <span className="scriblelandingpage-text06">
                  <span>
                    Join now
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="scriblelandingpage-hero-heading-left">
        <div className="scriblelandingpage-container2">
          <div className="scriblelandingpage-container3">
            <div className="scriblelandingpage-container4">
              <div className="scriblelandingpage-container5">
                <span className="scriblelandingpage-text08">
                  <br className="scriblelandingpage-text09"></br>
                  <span className="scriblelandingpage-text10">Writing</span>
                  <br className="scriblelandingpage-text11"></br>
                  <span className="scriblelandingpage-text12">Reimagined</span>
                  <br></br>
                  <br></br>
                </span>
              </div>
            </div>
            <span className="scriblelandingpage-text15">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <span>Scrible makes writing fast, fun and easy.</span>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                It&apos;s AI features gives you the confidence
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                to write
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                anything
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>you want.</span>
              <br></br>
              <br></br>
              <br></br>
            </span>
            <a
              href="https://scrible.page/signup"
              autoFocus
              className="scriblelandingpage-button1"
            >
              <span className="scriblelandingpage-text31">
                <span>
                  Try for free -&gt;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </a>
          </div>
        </div>
        <video
          src="/playground_assets/scrible-landing-page%20-%20hd%201080p.mp4"
          loop
          muted
          poster="/playground_assets/scrible-landing-page%20-%20hd%201080p.mp4"
          autoPlay
          className="scriblelandingpage-video"
        ></video>
      </div>
      <div className="scriblelandingpage-footer">
        <div className="scriblelandingpage-footerslogan">
          <span className="scriblelandingpage-text33">
            Become a better writer
          </span>
        </div>
        <div className="scriblelandingpage-actions">
          <a
            href="https://scrible.page/signup"
            autoFocus
            className="scriblelandingpage-button2"
          >
            <span className="scriblelandingpage-text34">
              <span>
                Try for free -&gt;
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </a>
        </div>
        <div className="scriblelandingpage-copyright"></div>
        <span className="scriblelandingpage-text36">
          <span>Copyright © 2023 scrible</span>
        </span>
      </div>
    </div>
  )
}

export default Scriblelandingpage
