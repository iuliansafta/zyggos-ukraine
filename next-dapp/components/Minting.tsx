import { LandingUnite } from './images'

function Mint() {
  return (
    <div className="mint">
      <div className="mint-hero">
        <div className="container">
          <div className="details">
            <div className="web-tag">mint</div>
            <h3>Mint a Zyggo!</h3>
            <h2>3333/3333</h2>
            <p>
              Instead of feeling helpless, we choose to try to help those in
              despair, with what we know best. We can’t do it without you.
            </p>
            <div className="wallet-connect">
              <button>Connect Wallet</button>
            </div>
            <span>Connect to the Ethereum Mainnet network.</span>
          </div>
          <div className="info">
            <div className="unite-img">
              <LandingUnite />
            </div>
            <div className="desc">
              <p>Sharp crypto minds & hearts</p>
              <h5>UNITE</h5>
              <p className="small">to make a difference!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mint-data">
        <div className="container">
          <div className="details">
            <p>
              These curious Zyggos are generated using 150+ possible traits
              (clothing, expressions, accessories, etc.), and will conquer the
              💙 of the Ethereum Blockchain as ERC-721 tokens (hosted on IPFS).
              Each design element embodies a high level of detail, carefully
              hand-drawn with stubborn dedication and quirkiness. The collection
              is very limited, you can purchase only three MetaHumanity Zyggo
              NFTs for 0.12 ETH each (plus gas).
            </p>
          </div>
          <div className="info">
            <span>MINTING informations:</span>
            <ul className="mint-informations">
              <li>
                <p>Mint Price</p>
                <p>0.12 ETH</p>
              </li>
              <li>
                <p>NFTs</p>
                <p>3333</p>
              </li>
              <li>
                <p>Sale Time</p>
                <p>TBA</p>
              </li>
              <li>
                <p>Whitelist</p>
                <p>Guaranteed</p>
              </li>
              <li>
                <p>Public Sale</p>
                <p>FCFS</p>
              </li>
              <li>
                <p>Accepted Currency</p>
                <p>Ethereum</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mint
