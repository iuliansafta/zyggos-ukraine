import { Disclosure, Transition } from '@headlessui/react'

const zyggoLink = (
  <a href="mailto:zyggodistrikt@gmail.com?subject = Hello = Message">
    ZyggoDistrikt@gmail.com
  </a>
)
const faqData = [
  {
    title: 'What is the mission of the project?',
    body:
      'The MetaHumanity Zyggo NFT Project aims to empower war victims from Ukraine, by donating all profits to official organisations that are currently tirelessly running costly, heart-warming missions to help millions of Ukrainians.',
    id: 'faq1',
  },
  {
    title: 'What is the metaverse?',
    body:
      'The Metaverse is a digital reality environment where users can interact, buy and sell NFTs (avatars, digital art, gaming tools, etc.), often using cryptocurrency.',
    id: 'faq2',
  },
  {
    title: 'Where can I mint (buy) and view my Zyggo Distrikt NFT? ',
    body:
      'It’s easy, you can buy a Zyggo directly on our website. Once minted you can view your NFT on your OpenSea account.',
    id: 'faq3',
  },
  {
    title: 'How can I use my NFT?',
    body:
      'You can use it as an avatar in the Metaverse and in our upcoming digital environments. Holding it means you are a part of exclusive community of sharp crypto investors. You can also get cool prints of your Zyggos (NFTs are 3000x3000px, 72dpi = 720x720px, 300dpi).',
    id: 'faq4',
  },
  {
    title: 'How do we know the NFT money is donated? ',
    body:
      'The Zyggo Team is committed to donating all profits to organisations helping Ukraine. All donation transactions will be transparent, 100% visible on the blockchain.',
    id: 'faq5',
  },
  {
    title: 'How can I help the cause for Ukraine?  ',
    body:
      'You’re awesome! There are many ways to do that: \n- Join our social media channels and help us spread the word on the humanitarian Zyggo Collection. \n- Buy a MetaHumanity Zyggo NFT when launch the Public Mint on our website.\n- Tell your friends and crypto communities. \n- Reach out via ZyggoDistrikt@gmail.com and partner with us for this cause if you have a cool idea (e.g. fundraising initiatives, promo partnerships, etc.)',
    id: 'faq6',
  },
  {
    title: 'What does it mean to be a Zyggo Elite Coalition Member? ',
    body:
      'Once you mint (buy) a Zyggo from our website you automatically become a member of the Zyggo Elite Coalition. You get early access to upcoming non-charity Zyggo NFT collections, and to many perks and benefits. ',
    id: 'faq7',
  },
  {
    title: 'Will Zyggo Distrikt launch other NFT collections?',
    body:
      'We’re humbled by your interest! We started this creative journey by envisioning a transformational NFT invasion collection that helps crypto enthusiast access great market opportunities, all in a fun, unconventional environment. Given the critical war situation in Ukraine we hit the brakes and rerouted all our efforts to empower the crypto community with a quick way to stand by Ukrainian victims. We will launch our initial collection very soon, this year. Keep close for news on the upcoming Zyggo collection! ',
    id: 'faq8',
  },
]

function Faq() {
  return (
    <div className="faq" id="faq">
      <div className="container">
        <div className="web-tag">learn more</div>
        <h3>FAQs</h3>
        <p className="subtitle">
          Read on bellow. Reach out and ask us anything via{' '}
          <a
            href="https://twitter.com/ZyggoDistrikt"
            rel="noreferrer"
            target="_blank"
          >
            Twitter
          </a>{' '}
          and{' '}
          <a
            href="https://discord.gg/GPvMnZ84P6"
            rel="noreferrer"
            target="_blank"
          >
            Discord
          </a>
          .
        </p>

        <div className="accordion">
          {faqData.map((faq, i) => (
            <Disclosure key={i}>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={
                      open ? 'accordion-button' : 'accordion-button collapsed'
                    }
                  >
                    <div className="title">
                      {faq.title}
                      <span>{open ? '-' : '+'}</span>
                    </div>
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  ></Transition>
                  <Disclosure.Panel className="accordion-body">
                    {faq.body}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>

      <div className="faq-flame">
        <img src="/images/team-flame.png" alt="faq" />
      </div>
    </div>
  )
}

export default Faq
