function Meet() {
  return (
    <div className="meet" id="about">
      <div className="container">
        <div className="desc">
          <div className="desc-img">
            <img src="/images/zd-animation.gif" alt="meet zyggos" />
          </div>
          <div className="desc-body">
            <div className="web-tag">nft collection</div>
            <h3>Meet the Zyggos</h3>
            <p>
              Zyggo Distrikt created a humanitarian collection of 3333 NFTs
              inspired by Ukrainian culture and Peace symbolism. All digital
              collectibles are unique, some rarer than others.
            </p>

            <a href="/minting" target="_blank" className="button cta">
              MINT a Zyggo
            </a>
          </div>
        </div>
        <p>
          These curious Zyggos are generated using 150+ possible traits
          (clothing, expressions, accessories, etc.), and will conquer the 💙 of
          the Ethereum Blockchain as ERC-721 tokens (hosted on IPFS). Each
          design element embodies a high level of detail, carefully hand-drawn
          with stubborn dedication and quirkiness. The collection is limited,
          you can purchase up to eleven MetaHumanity Zyggo NFTs for 0.09 ETH
          each (plus gas).
        </p>
      </div>

      <div className="meet-star">
        <img src="/images/meet-star.png" alt="meet star" />
      </div>

      <div className="meet-moon">
        <img src="/images/meet-moon.png" alt="meet moon" />
      </div>

      <div className="meet-dots-r">
        <img src="/images/landing-dots-l.png" alt="meet dots" />
      </div>
    </div>
  );
}

export default Meet;
