function Landing() {
  return (
    <div className="landing">
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
            <a href="#" className="button cta">BUY on Opensea</a>
            <a href="#" className="button cta">
              <img src="/build/images/discord2.png" alt="discord" />
              Join our Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
