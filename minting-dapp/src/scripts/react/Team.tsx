function Team() {
  const team = [
    {
      name: 'Naor',
      position: 'Founder & Crypto Nerd',
      description: 'Levitating iron man. Wine & chocolate taster.',
      spirit: 'Spirit animal: Yoda (Star Wars)',
      image: '/build/images/naor.png',
    },
    {
      name: 'Guillaume',
      position: 'Blockchain Champion',
      description: 'Amateur dog trainer. Fired-up jogging addict.',
      spirit: 'Spirit animal: Road Runner (Looney Tunes)',
      image: '/build/images/guillaume.png',
    },
    {
      name: 'Dawn',
      position: 'People Whisperer & Brand Alchemist',
      description: 'Recovering idealist. Undercover introvert.',
      spirit: 'Spirit animal: Falkor (The Neverending Story)',
      image: '/build/images/dawn.png',
    },
    {
      name: 'Uma',
      position: 'NFT Creator & Visual Heartist',
      description: 'Truth fighter. Always bold or italic, never regular.',
      spirit: 'Spirit animal: Toothless (How to Train Your Dragon)',
      image: '/build/images/uma.png',
    },
    {
      name: 'Azer',
      position: 'Tactical Code Freak',
      description: 'Devoted papa bear. Professional toe stabber.',
      spirit: 'Spirit animal: Raphael (Teenage Mutant Ninja Turtles)',
      image: '/build/images/azer.png',
    },
    {
      name: 'Airi',
      position: 'Brand & Visual Heartist',
      description: 'Cat tamer. Turning coffee into statement-designs.',
      spirit: 'Spirit animal: Pikachu (Pokemon)',
      image: '/build/images/airi.png',
    },
  ]

  return (
    <div className="team">
      <div className="container">
        <div className="web-tag">team</div>
        <h3>Zyggo team</h3>
        <p>
          Just like our NFTs, we're a peculiar bunch of multidisciplinary
          seniors who love digital art and what it can do for the MetaSociety.
          We can't do boring, so we have a couple of furry sidekicks to get our
          creative juices flowing: one hyper puppy and four charismatic cats.
        </p>
        <p>
          We chose to stay anonymous, as the MetaHumanity Zyggo NFT project is a
          collective movement - and credits for helping Ukraine belong to each
          and every one of you.
        </p>

        <div className="team-list">
          {team.map((member) => (
            <div className="box" key={member.name}>
              <div className="image">
                <img src={member.image} alt="member" />
              </div>
              <div className="desc">
                <h4>{member.name}</h4>
                <h5>{member.position}</h5>
                <p>{member.description}</p>
                <p>{member.spirit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="team-dots-r">
        <img src="/build/images/team-dots-r.png" alt="team" />
      </div>

      <div className="team-flame">
        <img src="/build/images/team-flame.png" alt="team" />
      </div>

      <div className="team-ball">
        <img src="/build/images/team-ball.png" alt="team" />
      </div>

      <div className="team-dots-rb">
        <img src="/build/images/motive-dots.png" alt="team" />
      </div>
    </div>
  )
}

export default Team
