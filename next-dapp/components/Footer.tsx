import Image from "next/image";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="media">
          <h3>Follow us & spread the word via:</h3>
          <div className="social-media">
            <a href="#" target="_blank">
              <img
                src="/images/instagram-w.png"
                alt="Instagram"
                layout="fill"
              />
            </a>
            <a href="#" target="_blank">
              <img src="/images/twitter-w.png" alt="twitter" layout="fill" />
            </a>
            <a href="#" target="_blank">
              <img src="/images/discord-w.png" alt="discord" layout="fill" />
            </a>
            <a href="#" target="_blank">
              <img src="/images/medium-w.png" alt="medium" layout="fill" />
            </a>
          </div>
          <p>Reach out & partner with us via ZyggoDistrikt[at]gmail.com</p>
          <a href="#" className="terms">
            Our Terms & Conditions
          </a>
          <span>© 2022 Zyggo Distrikt</span>
        </div>
        <div className="verified">
          <div className="logo">
            <img src="/images/logo-w.png" alt="Zyggo Distrikt" layout="fill" />
          </div>
          <p>
            VERIFIED SMART CONTRACT ADDRESS: {"\n"}
            0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D
          </p>
          <span>powered by Trilld </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
