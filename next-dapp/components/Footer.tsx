import { Discord, Discord2, Instagram, Logo, Medium, Twitter } from './images'

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="media">
          <h3>Follow us & spread the word via:</h3>
          <div className="social-media">
            <a
              href="https://www.instagram.com/zyggodistrikt/"
              rel="noreferrer"
              target="_blank"
            >
              <Instagram />
            </a>
            <a
              href="https://twitter.com/ZyggoDistrikt"
              rel="noreferrer"
              target="_blank"
            >
              <Twitter />
            </a>
            <a
              href="https://medium.com/@zyggodistrikt"
              rel="noreferrer"
              target="_blank"
            >
              <Medium />
            </a>
            <a
              href="https://discord.gg/GPvMnZ84P6"
              rel="noreferrer"
              target="_blank"
            >
              <Discord />
            </a>
          </div>
          <p>
            Reach out & partner with us via{' '}
            <a href="mailto:zyggodistrikt@gmail.com?subject = Hello = Message">
              ZyggoDistrikt[at]gmail.com
            </a>
          </p>
          <a href="#" className="terms">
            Our Terms & Conditions
          </a>
          <span>© 2022 Zyggo Distrikt</span>
        </div>
        <div className="verified">
          <div className="logo">
            <a href="#landing">
              <img src="/images/logo-w.png" alt="Zyggo Distrikt" />
            </a>
          </div>
          <p>
            VERIFIED SMART CONTRACT ADDRESS: {'\n'}
            0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D
          </p>
          <span>
            powered by{' '}
            <a href="http://www.trilld.com/" rel="noreferrer" target="_blank">
              Trilld
            </a>{' '}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
