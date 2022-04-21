import Image from 'next/image'
import { useState } from 'react'

function Partners() {
  const [isHovering1, setIsHovered] = useState(false)
  const [isHovering2, setIsHovered2] = useState(false)
  const [isHovering3, setIsHovered3] = useState(false)
  const onMouseEnter = () => setIsHovered(true)
  const onMouseLeave = () => setIsHovered(false)
  const onMouseEnter2 = () => setIsHovered2(true)
  const onMouseLeave2 = () => setIsHovered2(false)
  const onMouseEnter3 = () => setIsHovered3(true)
  const onMouseLeave3 = () => setIsHovered3(false)
  return (
    <div className="partners">
      <div className="container">
        <h3>Supporting partners & communities</h3>
        <div className="partners-items">
          <a
            href="https://novaukraine.org/"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {isHovering1 ? (
              <Image
                src="/images/nova-logo-hover.png"
                alt="nova ukraine"
                width="185"
                height="55"
              />
            ) : (
              <Image
                src="/images/nova-logo.png"
                alt="nova ukraine"
                width="185"
                height="55"
              />
            )}
          </a>
          <a
            href="https://endaoment.org/"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={onMouseEnter3}
            onMouseLeave={onMouseLeave3}
          >
            {isHovering3 ? (
              <Image
                src="/images/endaoment-logo-hover.png"
                alt="endaoment"
                width="230"
                height="53"
              />
            ) : (
              <Image
                src="/images/endaoment-logo.png"
                alt="endaoment"
                width="230"
                height="53"
              />
            )}
          </a>
          <a
            href="https://www.facebook.com/visualart.live"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
          >
            {isHovering2 ? (
              <Image
                src="/images/visualart-logo-hover.png"
                alt="visualart"
                width="198"
                height="48"
              />
            ) : (
              <Image
                src="/images/visualart-logo.png"
                alt="visualart"
                width="198"
                height="48"
              />
            )}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Partners
