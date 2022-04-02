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
  hiddenMetadataUri:
    "ipfs://QmNwL837VXNN4Z8szV8Ep8frVdLW68fLUM12XiQRqBu56W/hidden.json",
  maxSupply: 3333,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 3,
  },
  publicSale: {
    price: 0.09,
    maxMintAmountPerTx: 11,
  },
  maxMintOwner: 11,
  contractAddress: "0xd96780f3Dc4bf26DDEa3d87153e4e2a315689c65",
  marketplaceIdentifier: "zyggos-ukraine",
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
