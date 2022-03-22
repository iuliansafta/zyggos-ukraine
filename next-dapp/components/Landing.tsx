import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Discord, Discord2, Instagram, Logo, Medium, Twitter } from './images'

function Landing() {
  return (
    <div className="landing" id="landing">
      <div className="landing-atom">
        <img src="/images/landing-atom.png" alt="landing atom" />
      </div>
      <div className="landing-dots-r">
        <img src="/images/landing-dots-r.png" alt="landing dots right" />
      </div>
      <div className="landing-dots-l">
        <img src="/images/landing-dots-l.png" alt="landing dots left" />
      </div>
      <div className="sidebar">
        <div className="logo">
          <a href="#landing">
            <Logo />
          </a>
        </div>

        <div className="navigation">
          <div className="menu">
            <Menu as="div" className="dropdown-menu">
              <Menu.Button>More</Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="dropdown-list">
                  <Menu.Item>
                    <a href="#about">about</a>
                  </Menu.Item>
                  <Menu.Item>
                    <a href="#manifesto">manifesto</a>
                  </Menu.Item>
                  <Menu.Item>
                    <a href="#team">team</a>
                  </Menu.Item>
                  <Menu.Item>
                    <a href="#metastory">metastory</a>
                  </Menu.Item>
                  <Menu.Item>
                    <a href="#faq">FAQs</a>
                  </Menu.Item>
                  <Menu.Item>
                    <div className="social">
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
                        href="https://discord.gg/GPvMnZ84P6"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Discord />
                      </a>
                      <a
                        href="https://medium.com/@zyggodistrikt"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Medium />
                      </a>
                    </div>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>

          <nav className="nav-list">
            <a href="#about">about</a>
            <a href="#manifesto">manifesto</a>
            <a href="#team">team</a>
            <a href="#metastory">metastory</a>
            <a href="#faq">FAQs</a>
          </nav>

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
              href="https://discord.gg/GPvMnZ84P6"
              rel="noreferrer"
              target="_blank"
            >
              <Discord />
            </a>
            <a
              href="https://medium.com/@zyggodistrikt"
              rel="noreferrer"
              target="_blank"
            >
              <Medium />
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="landing-body">
          <h1>we rise by lifting others</h1>

          <div className="landing-description">
            <p className="web-tag">nfts for good</p>
            <p className="desc-large">
              Very limited, unconventional NFT collection that stands for
              MetaHumanity by directing all sales profits to organizations that
              support Ukrainian refugees.
            </p>
            <p className="desc-small">
              Instead of feeling helpless, we choose to try to help those in
              despair, with what we know best. We can&apos;t do it without you.
            </p>

            <div className="landing-cta">
              <a href="#" className="button cta">
                BUY on Opensea
              </a>
              <a href="#" className="button cta">
                <Discord2 /> &nbsp; Join our Discord
              </a>
            </div>

            <div className="landing-secondary-desc">
              <p className="web-tag">
                no whitelists. first come - first served
              </p>
              <p className="desc-small">
                Join our Twitter & Discord communities and be the 1st to secure
                a MetaHumanity Zyggo and inspire others to do the same!
              </p>
            </div>
          </div>
        </div>

        <div className="landing-unite">
          <div className="unite-img">
            <img src="/images/landing-unite.png" alt="landing unite" />
          </div>
          <div className="desc">
            <p>Sharp crypto minds & hearts</p>
            <h3>UNITE</h3>
            <p className="small">to make a difference!</p>
          </div>

          <div className="landing-hero">
            <img src="/images/landing-hero.png" alt="landing hero" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Landing
