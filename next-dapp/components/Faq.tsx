const faqData = [
  {
    title: "What is the mission of the project?",
    body: "Lorem ipsum dolor",
    id: "faq1",
  },
  {
    title: "What is the metaverse?",
    body: "Lorem ipsum dolor",
    id: "faq2",
  },
  {
    title: "Where can I mint (buy) and view my Zyggo Distrikt NFT? ",
    body: "Lorem ipsum dolor",
    id: "faq3",
  },
  {
    title: "How can I use my NFT?",
    body: "You can use it as an avatar in the Metaverse and in our upcoming digital environments. Holding it means you are a part of exclusive community of sharp crypto investors. You can also get cool prints of your Zyggos (NFTs are 3000x3000px, 72dpi = 720x720px, 300dpi).",
    id: "faq4",
  },
  {
    title: "How do we know the NFT money is donated? ",
    body: "Lorem ipsum dolor",
    id: "faq5",
  },
  {
    title: "How can I help the cause for Ukraine?  ",
    body: "Lorem ipsum dolor",
    id: "faq6",
  },
  {
    title: "What does it mean to be a Zyggo Elite Coalition Member? ",
    body: "Lorem ipsum dolor",
    id: "faq7",
  },
  {
    title: "Will Zyggo Distrikt launch other NFT collections?",
    body: "Lorem ipsum dolor",
    id: "faq8",
  },
];

function Faq() {
  return (
    <div className="faq" id="faq">
      <div className="container">
        <div className="web-tag">learn more</div>
        <h3>FAQs</h3>
        <p className="subtitle">
          We will continue to add to our roadmap over time.
        </p>

        <div className="accordion accordion-flush" id="faqParent">
          {faqData.map((faq, i) => (
            <div className="accordion-item" key={i}>
              <h2 className="accordion-header mb-0" id={"flush-" + faq.id}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#" + faq.id}
                  aria-expanded="false"
                  aria-controls={faq.id}
                >
                  {faq.title}
                </button>
              </h2>
              <div
                id={faq.id}
                className="accordion-collapse border-0 collapse"
                aria-labelledby={"flush-" + faq.id}
                data-bs-parent="#faqParent"
              >
                <div className="accordion-body">{faq.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="faq-flame">
        <img src="/images/team-flame.png" alt="faq" />
      </div>
    </div>
  );
}

export default Faq;
