import type { NextPage } from "next";
import Footer from "../components/Footer";
import Mint from "../components/Minting";

const Minting: NextPage = () => {
  return (
    <div>
      <Mint />
      <Footer page="mint" />
    </div>
  );
};

export default Minting
