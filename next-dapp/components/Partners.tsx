import Image from 'next/image'

function Partners() {
  return (
    <div className="partners">
      <div className="container">
        <h3>Supporting partners & communities</h3>
        <div className="partners-items">
          <a href="https://novaukraine.org/" target="_blank" rel="noreferrer">
            <Image
              src="/images/nova-logo.png"
              alt="nova ukraine"
              width="185"
              height="55"
            ></Image>
          </a>
          <a
            href="https://www.facebook.com/visualart.live"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/visualart-logo.png"
              alt="nova ukraine"
              width="198"
              height="48"
            ></Image>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Partners
