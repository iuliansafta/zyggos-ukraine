import React, { useState, useEffect } from "react";
import { ethers, BigNumber } from "ethers";
import { ExternalProvider, Web3Provider } from "@ethersproject/providers";
import NftContractType from "../lib/NftContractType";
import detectEthereumProvider from "@metamask/detect-provider";
import NetworkConfigInterface from "../../smart-contract/lib/NetworkConfigInterface";
import CollectionConfig from "../../smart-contract/config/CollectionConfig";
import MintWidget from "./MintWidget";

import { LandingUnite } from "./images";

import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const ContractAbi = require("../../smart-contract/artifacts/contracts/" +
  CollectionConfig.contractName +
  ".sol/" +
  CollectionConfig.contractName +
  ".json").abi;

interface Props {}

interface State {
  userAddress: string | null;
  network: ethers.providers.Network | null;
  networkConfig: NetworkConfigInterface;
  totalSupply: number;
  maxSupply: number;
  maxMintAmountPerTx: number;
  tokenPrice: BigNumber;
  isPaused: boolean;
  isWhitelistMintEnabled: boolean;
  isUserInWhitelist: boolean;
  merkleProofManualAddress: string;
  merkleProofManualAddressFeedbackMessage: string | JSX.Element | null;
  errorMessage: string | JSX.Element | null;
}

const defaultState: State = {
  userAddress: null,
  network: null,
  networkConfig: CollectionConfig.mainnet,
  totalSupply: 0,
  maxSupply: 0,
  maxMintAmountPerTx: 0,
  tokenPrice: BigNumber.from(0),
  isPaused: true,
  isWhitelistMintEnabled: false,
  isUserInWhitelist: false,
  merkleProofManualAddress: "",
  merkleProofManualAddressFeedbackMessage: null,
  errorMessage: null,
};

const Mint = () => {
  const [provider, setProvider] = useState<Web3Provider | undefined>(undefined);
  const [contract, setContract] = useState<NftContractType | undefined>(
    undefined
  );
  const [contractInfo, setContractInfo] = useState<State>(defaultState);
  const [errorState, setErrorState] = useState<{ errorMessage: any }>({
    errorMessage: "",
  });
  const [mining, setMining] = useState(false);
  const [minted, setMinted] = useState(false);

  useEffect(() => {
    const initContract = async () => {
      const browserProvider =
        (await detectEthereumProvider()) as ExternalProvider;

      if (browserProvider?.isMetaMask !== true) {
        setError(
          <>
            We were not able to detect <strong>MetaMask</strong>. We value{" "}
            <strong>privacy and security</strong> a lot so we limit the wallet
            options on the DAPP.
            <br />
            <br />
            But don&apos;t worry! <span className="emoji">😃</span> You can
            always interact with the smart-contract through{" "}
            <a href={generateContractUrl()} target="_blank" rel="noreferrer">
              {contractInfo.networkConfig.blockExplorer.name}
            </a>{" "}
            and{" "}
            <strong>
              we do our best to provide you with the best user experience
              possible
            </strong>
            , even from there.
            <br />
            <br />
            You can also get your <strong>Whitelist Proof</strong> manually,
            using the tool below.
          </>
        );
      }

      if (browserProvider && !provider) {
        setProvider(new ethers.providers.Web3Provider(browserProvider));
        registerWalletEvents(browserProvider);
        await initWallet();
      }
    };

    initContract();
  }, [provider]);

  const mintTokens = async (amount: number): Promise<void> => {
    if (!contract) {
      return;
    }

    setMining(true);

    try {
      const txn = await contract.mint(amount, {
        value: contractInfo.tokenPrice.mul(amount),
      });
      await txn.wait();

      refreshContractInfo();

      setMining(false);
      setMinted(true);

      setTimeout(() => {
        setMinted(false);
      }, 7000);
    } catch (e) {
      setError(e);
    }
  };

  const generateContractUrl = (): string => {
    return contractInfo.networkConfig.blockExplorer.generateContractUrl(
      CollectionConfig.contractAddress!
    );
  };

  const generateMarketplaceUrl = (): string => {
    return CollectionConfig.marketplaceConfig.generateCollectionUrl(
      CollectionConfig.marketplaceIdentifier,
      !isNotMainnet()
    );
  };

  const connectWallet = async (): Promise<void> => {
    try {
      await provider?.provider.request!({ method: "eth_requestAccounts" });

      initWallet();
    } catch (e) {
      // setError(e);
    }
  };

  const initWallet = async (): Promise<void> => {
    if (!provider) {
      return;
    }

    const walletAccounts = await provider.listAccounts();

    setContractInfo(defaultState);

    if (walletAccounts?.length === 0) {
      return;
    }

    const network = await provider.getNetwork();
    let networkConfig: NetworkConfigInterface;

    if (network.chainId === CollectionConfig.mainnet.chainId) {
      networkConfig = CollectionConfig.mainnet;
    } else if (network.chainId === CollectionConfig.testnet.chainId) {
      networkConfig = CollectionConfig.testnet;
    } else {
      setError("Unsupported network!");

      return;
    }

    setContractInfo((prevState) => {
      return {
        ...prevState,
        ...{
          userAddress: walletAccounts[0],
          network,
          networkConfig,
        },
      };
    });

    if (!CollectionConfig.contractAddress) {
      return;
    }

    if ((await provider.getCode(CollectionConfig.contractAddress!)) === "0x") {
      setError(
        "Could not find the contract, are you connected to the right chain?"
      );

      return;
    }

    // @ts-ignore
    const contractInstance = new ethers.Contract(
      CollectionConfig.contractAddress!,
      ContractAbi,
      provider.getSigner()
    ) as NftContractType;

    setContract(contractInstance);

    const contractInfoUpdated = {
      maxSupply: (await contractInstance.maxSupply()).toNumber(),
      totalSupply: (await contractInstance.totalSupply()).toNumber(),
      maxMintAmountPerTx: (
        await contractInstance.maxMintAmountPerTx()
      ).toNumber(),
      tokenPrice: await contractInstance.cost(),
      isPaused: await contractInstance.paused(),
      isWhitelistMintEnabled: await contractInstance.whitelistMintEnabled(),
      // isUserInWhitelist: Whitelist.contains(state.userAddress ?? ""),
    };

    setContractInfo((prevState) => {
      return {
        ...prevState,
        ...contractInfoUpdated,
      };
    });
  };

  const refreshContractInfo = async (): Promise<void> => {
    if (!contract) {
      return;
    }

    const contractInfoUpdated = {
      maxSupply: (await contract.maxSupply()).toNumber(),
      totalSupply: (await contract.totalSupply()).toNumber(),
      maxMintAmountPerTx: (await contract.maxMintAmountPerTx()).toNumber(),
      tokenPrice: await contract.cost(),
      isPaused: await contract.paused(),
      isWhitelistMintEnabled: await contract.whitelistMintEnabled(),
    };

    setContractInfo((prevState) => {
      return {
        ...prevState,
        ...contractInfoUpdated,
      };
    });
  };

  const isNotMainnet = (): boolean => {
    return (
      contractInfo.network !== null &&
      contractInfo.network.chainId !== CollectionConfig.mainnet.chainId
    );
  };

  const isSoldOut = (): boolean => {
    return (
      contractInfo.maxSupply !== 0 &&
      contractInfo.totalSupply < contractInfo.maxSupply
    );
  };

  const isContractReady = (): boolean => {
    return contract !== undefined;
  };

  const isWalletConnected = (): boolean => {
    return contractInfo.userAddress !== null;
  };

  const registerWalletEvents = (browserProvider: ExternalProvider): void => {
    // @ts-ignore
    browserProvider.on("accountsChanged", () => {
      initWallet();
    });

    // @ts-ignore
    browserProvider.on("chainChanged", () => {
      window.location.reload();
    });
  };

  const setError = (error: any = null): void => {
    let errorMessage = "Unknown error...";

    if (null === error || typeof error === "string") {
      errorMessage = error;
    } else if (typeof error === "object") {
      // Support any type of error from the Web3 Provider...
      if (error?.error?.message !== undefined) {
        errorMessage = error.error.message;
      } else if (error?.data?.message !== undefined) {
        errorMessage = error.data.message;
      } else if (error?.message !== undefined) {
        errorMessage = error.message;
      } else if (React.isValidElement(error)) {
        setErrorState({ errorMessage: error });

        return;
      }
    }

    setErrorState({
      errorMessage:
        null === errorMessage
          ? null
          : errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1),
    });
  };

  return (
    <div className="mint">
      <div className="mint-hero">
        <div className="container">
          <div className="details">
            <div className="web-tag">mint</div>
            <h3>Mint a Zyggo!</h3>

            {errorState.errorMessage ? (
              <div className="error">
                <p>{errorState.errorMessage}</p>
                <button onClick={() => setError()}>Close</button>
              </div>
            ) : null}

            {isWalletConnected() && isContractReady() && (
              <h2>
                {contractInfo.totalSupply}/{contractInfo.maxSupply}
              </h2>
            )}
            <p>
              Instead of feeling helpless, we choose to try to help those in
              despair, with what we know best. We can’t do it without you.
            </p>

            {isWalletConnected() ? (
              <>
                {isContractReady() ? (
                  <>
                    {contractInfo.totalSupply < contractInfo.maxSupply ? (
                      <MintWidget
                        maxSupply={contractInfo.maxSupply}
                        totalSupply={contractInfo.totalSupply}
                        tokenPrice={contractInfo.tokenPrice}
                        maxMintAmountPerTx={contractInfo.maxMintAmountPerTx}
                        isPaused={contractInfo.isPaused}
                        isWhitelistMintEnabled={
                          contractInfo.isWhitelistMintEnabled
                        }
                        isUserInWhitelist={contractInfo.isUserInWhitelist}
                        mintTokens={(mintAmount) => mintTokens(mintAmount)}
                        isMining={mining}
                      />
                    ) : (
                      <div className="collection-sold-out">
                        {/* <p>
                          Tokens have been <strong>sold out</strong>!{" "}
                          <span className="emoji">🥳</span>
                        </p>
                        You can buy from our beloved holders on{" "}
                        <a
                          href={generateMarketplaceUrl()}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {CollectionConfig.marketplaceConfig.name}
                        </a>
                        . */}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="collection-not-ready">
                    <svg
                      className="spinner"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Loading collection data...
                  </div>
                )}
              </>
            ) : null}

            {!isWalletConnected() && !isSoldOut() ? (
              <div className="wallet-connect">
                <button onClick={connectWallet}>Connect Wallet</button>
              </div>
            ) : null}

            {isNotMainnet() ? (
              <span>
                Connect to the Ethereum Mainnet network. You are on testnet.
              </span>
            ) : (
              <span>You are on Ethereum Mainnet network.</span>
            )}
          </div>
          <div className="info">
            <div className="unite-img">
              <LandingUnite />
            </div>
            <div className="desc">
              <p>Sharp crypto minds & hearts</p>
              <h5>UNITE</h5>
              <p className="small">to make a difference!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mint-data">
        <div className="container">
          <div className="details">
            <p>
              These curious Zyggos are generated using 150+ possible traits
              (clothing, expressions, accessories, etc.), and will conquer the
              💙 of the Ethereum Blockchain as ERC-721 tokens (hosted on IPFS).
              Each design element embodies a high level of detail, carefully
              hand-drawn with stubborn dedication and quirkiness. The collection
              is limited, you can purchase up to eleven MetaHumanity Zyggo NFTs
              for 0.09 ETH each (plus gas).
            </p>
          </div>
          <div className="info">
            <span>MINTING INFO:</span>
            <ul className="mint-informations">
              <li>
                <p>Mint Price</p>
                <p>0.09 ETH</p>
              </li>
              <li>
                <p>NFTs</p>
                <p>3333</p>
              </li>
              <li>
                <p>Sale Time</p>
                <p>TBA</p>
              </li>
              <li>
                <p>Whitelist</p>
                <p>Guaranteed</p>
              </li>
              <li>
                <p>Public Sale</p>
                <p>FCFS</p>
              </li>
              <li>
                <p>Accepted Currency</p>
                <p>Ethereum</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {minted && <ConfettiWidget />}
    </div>
  );
};

const ConfettiWidget = () => {
  const { width, height } = useWindowSize();
  return <Confetti width={width} height={height} />;
};

export default Mint;
