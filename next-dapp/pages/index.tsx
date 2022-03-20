import type { NextPage } from "next";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Manifesto from "../components/Manifesto";
import Meet from "../components/Meet";
import Metastory from "../components/Metastory";
import Motive from "../components/Motive";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";

const Home: NextPage = () => {
  return (
    <div>
      <Landing />
      <Meet />
      <Motive />
      <Manifesto />
      <Team />
      <Metastory />
      <Roadmap />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
