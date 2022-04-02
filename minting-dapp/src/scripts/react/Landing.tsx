function Landing() {
  return (
    <div className="landing">
      <div className="landing-atom">
        <img src="/build/images/landing-atom.png" alt="landing atom" />
      </div>
      <div className="landing-dots-r">
        <img src="/build/images/landing-dots-r.png" alt="landing dots right" />
      </div>
      <div className="landing-dots-l">
        <img src="/build/images/landing-dots-l.png" alt="landing dots left" />
      </div>
      <div className="sidebar">
        <div className="logo">
          <img id="logo" src="/build/images/logo.png" alt="Logo" />
        </div>

        <nav className="nav-list">
          <a href="">about</a>
          <a href="">manifesto</a>
          <a href="">team</a>
          <a href="">metastory</a>
          <a href="">FAQs</a>
        </nav>

        <div className="social-media">
          <a href="#" target="_blank">
            <img src="/build/images/instagram.png" alt="Instagram" />
          </a>
          <a href="#" target="_blank">
            <img src="/build/images/twitter.png" alt="twitter" />
          </a>
          <a href="#" target="_blank">
            <img src="/build/images/discord.png" alt="discord" />
          </a>
          <a href="#" target="_blank">
            <img src="/build/images/medium.png" alt="medium" />
          </a>
        </div>
      </div>

      <div className="landing-body">
        <h1>we raise by lifting others</h1>

        <div className="landing-description">
          <p className="web-tag">nfts for good</p>
          <p className="desc-large">
            Very limited, unconventional NFT collection that stands for
            MetaHumanity by directing all sales profits to organizations that
            support Ukrainian refugees.
          </p>
          <p className="desc-small">
            Instead of feeling helpless, we choose to try to help those in
            despair, with what we know best. We can't do it without you.
          </p>

          <div className="landing-cta">
            <a href="#" className="button cta">
              BUY on Opensea
            </a>
            <a href="#" className="button cta">
              <img src="/build/images/discord2.png" alt="discord" />
              Join our Discord
            </a>
          </div>

          <div className="landing-secondary-desc">
            <p className="web-tag">no whitelists. first come - first served</p>
            <p className="desc-small">
              Join our Twitter & Discord communities and be the 1st to secure a
              MetaHumanity Zyggo and inspire others to do the same!
            </p>
          </div>
        </div>
      </div>

      <div className="landing-unite">
        <div className="unite-img">
          <img src="/build/images/landing-unite.png" alt="landing unite" />
        </div>
        <div className="desc">
          <p>Sharp crypto minds & hearts</p>
          <h3>UNITE</h3>
          <p className="small">to make a difference!</p>
        </div>

        <div className="landing-hero">
          <img src="/build/images/landing-hero.png" alt="landing hero" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
