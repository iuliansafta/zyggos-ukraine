import CollectionConfigInterface from "../lib/CollectionConfigInterface";
import { ethereumTestnet, ethereumMainnet } from "../lib/Networks";
import { openSea } from "../lib/Marketplaces";
import whitelistAddresses from "./whitelist.json";

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: "Zyggos4Ukraine",
  tokenName: "Zyggos 4 Ukraine",
  tokenSymbol: "ZYGGUA",
  hiddenMetadataUri: "ipfs://__CID__/hidden.json",
  maxSupply: 1111,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.35,
    maxMintAmountPerTx: 1,
  },
  contractAddress: null,
  marketplaceIdentifier: "zyggos-ukraine",
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
