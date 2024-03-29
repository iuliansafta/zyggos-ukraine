import type { NextPage } from "next";
import Footer from "../components/Footer";
import IndexPage from "../components/Head";
import Mint from "../components/Minting";

const Minting: NextPage = () => {
  return (
    <div>
      <IndexPage pageTitle="Zyggo Distrikt - Mint" />
      <Mint />
      <Footer page="mint" />
    </div>
  );
};

export default Minting;
