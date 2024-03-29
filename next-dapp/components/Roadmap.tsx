function Roadmap() {
  const roadmapList = [
    {
      image: '/images/roadmap-incubate.png',
      text: 'Incubate | Brand building & Partnerships',
    },
    {
      image: '/images/roadmap-infiltrate.png',
      text: 'Infiltrate  | Community expansion',
    },
    {
      image: '/images/roadmap-invade.png',
      text: 'Invade | MetaSelf Whitelisting & collection launch',
    },
    {
      image: '/images/roadmap-store.png',
      text: 'Online Store | Quality merchandise for verified holders',
    },
    {
      image: '/images/roadmap-comic.png',
      text: 'Comic Book | Zyggo Distrikt illustrated MetaBook',
    },
    {
      image: '/images/roadmap-immerse.png',
      text: 'Immerse | MetaEra membership perks & opportunities',
    },
  ]

  return (
    <div className="roadmap">
      <div className="container">
        <div className="heart-invasion">
          <div className="image">
            <img src="/images/ua-heart.png" alt="heart" />
            <span>+</span>
            <img src="/images/ua-logo.png" alt="logo" />
            <span className="equals">=</span>
          </div>
          <div className="desc">
            <h4>
              The Zyggo Team set out on a heart invasion mission for Ukraine.
            </h4>
            <p>
              We&apos;re currently using all our resources for the limited
              MetaHumanity collection, as Ukrainian people need the support of
              the NFT community now!
            </p>
          </div>
        </div>

        <div className="body">
          <div className="web-tag">roadmap</div>
          <h3>Empowering the Future of NFT Experiences</h3>
          <p>We will continue to add to our roadmap over time.</p>
          <div className="roadmap-list">
            {roadmapList.map((roadmap, i) => (
              <div className="item" key={i}>
                <div className="image">
                  <img src={roadmap.image} alt="member" />
                </div>
                <p>{roadmap.text}</p>
              </div>
            ))}
          </div>
          <p className="small">
            Owning your Zyggo is your MetaPass to trending NFT investments and
            unlocks Membership privileges and rewards. You’ll play a big role in
            our roadmap and have a chance to shape the Zyggo Distrikt future!
          </p>

          <p className="text-breaker">
            Check out some of the wacky perks we have lined up for you.
          </p>
          <p className="small">
            <b>15% sales</b>gear up to offer you more, pay back
            our NFT project loans
          </p>
          <p className="small">
            <b>25% sales</b>random NFT air drops to lucky Zyggo
            owners{' '}
          </p>
          <p className="small">
            <b>40% sales</b>raffles, freebies and wacky rewards
            for the most active members
          </p>
          <p className="small">
            <b>50% sales</b>activate Zyggo Transformation Room
            for NFT HODlers
          </p>
          <p className="small">
            <b>70% sales</b>launch Zyggo Distrikt virtual comic
            book
          </p>
          <p className="small">
            <b>80% sales</b>give back by sponsoring NGOs that
            help people with rare disorders (e.g. MMN)
          </p>
          <p className="small">
            <b>100% sales</b>reveal the identity of one Zyggo Team
            Member (by community vote), and more
          </p>
        </div>
      </div>

      <div className="roadmap-dots-r">
        <img src="/images/motive-dots.png" alt="roadmap" />
      </div>

      <div className="roadmap-moon">
        <img src="/images/meet-moon.png" alt="moon" />
      </div>

      <div className="roadmap-dots-l">
        <img src="/images/landing-dots-l.png" alt="roadmap" />
      </div>

      <div className="roadmap-dots-rb">
        <img src="/images/motive-dots.png" alt="team" />
      </div>
      <div className="roadmap-star">
        <img src="/images/roadmap-star.png" alt="star" />
      </div>
    </div>
  )
}

export default Roadmap
