import Image from 'next/image'
import { useState } from 'react'

function Partners() {
  const [isHovering1, setIsHovered] = useState(false)
  const [isHovering2, setIsHovered2] = useState(false)
  const onMouseEnter = () => setIsHovered(true)
  const onMouseEnter2 = () => setIsHovered2(true)
  const onMouseLeave = () => setIsHovered(false)
  const onMouseLeave2 = () => setIsHovered2(false)

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
            href="https://www.facebook.com/visualart.live"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
          >
            {isHovering2 ? (
              <Image
                src="/images/visualart-logo-hover.png"
                alt="nova ukraine"
                width="198"
                height="48"
              />
            ) : (
              <Image
                src="/images/visualart-logo.png"
                alt="nova ukraine"
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
