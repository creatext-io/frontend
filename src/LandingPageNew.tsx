import React from 'react'
import './LandingPageNew.css'

const Scriblelandingpage = (props) => {
  return (
    <div>
      <div className="scriblelandingpage-navbar-logo-left">
        <div className="scriblelandingpage-scriblelogo">
          <span className="scriblelandingpage-text">Scrible</span>
        </div>
        <div className="scriblelandingpage-navbar-container">
          <div className="scriblelandingpage-navbar-content">
            <div className="scriblelandingpage-navbar-brand"></div>
            <div className="scriblelandingpage-navbar-menu">
              <button type="button" className="scriblelandingpage-button">
                <span className="scriblelandingpage-text01">About</span>
              </button>
              <a
                href="mailto:tausif@scrible.page?subject=Hello 👋"
                className="scriblelandingpage-button1"
              >
                <span className="scriblelandingpage-text02">Contact</span>
              </a>
              <a
                href="https://scrible.page/signup"
                className="scriblelandingpage-button2"
              >
                <span className="scriblelandingpage-text03">
                  <span>
                    Join now
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
        </div>
      </div>
      <div className="scriblelandingpage-hero-heading-left">
        <div className="scriblelandingpage-container1">
          <div className="scriblelandingpage-container2">
            <div className="scriblelandingpage-container3">
              <div className="scriblelandingpage-container4">
                <span className="scriblelandingpage-text05">
                  <br className="scriblelandingpage-text06"></br>
                  <span className="scriblelandingpage-text07">Writing</span>
                  <br className="scriblelandingpage-text08"></br>
                  <span className="scriblelandingpage-text09">Reimagined</span>
                  <br></br>
                  <br></br>
                </span>
              </div>
            </div>
            <span className="scriblelandingpage-text12">
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
              className="scriblelandingpage-button3"
            >
              <span className="scriblelandingpage-text28">
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
          src="./public/scrible-landing-page.mp4"
          loop
          muted
          poster="./public/scrible-landing-page.mp4"
          autoPlay
          className="scriblelandingpage-video"
        ></video>
      </div>
      <div className="scriblelandingpage-footer">
        <div className="scriblelandingpage-footerslogan">
          <span className="scriblelandingpage-text30">
            Become a better writer
          </span>
        </div>
        <div className="scriblelandingpage-actions">
          <a
            href="https://scrible.page/signup"
            autoFocus
            className="scriblelandingpage-button4"
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
        <div className="scriblelandingpage-copyright">
          <span className="scriblelandingpage-text33">
            <span>Copyright © 2023 scrible</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Scriblelandingpage
