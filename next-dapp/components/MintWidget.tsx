import { utils, BigNumber } from "ethers";
import React from "react";

interface Props {
  maxSupply: number;
  totalSupply: number;
  tokenPrice: BigNumber;
  maxMintAmountPerTx: number;
  isPaused: boolean;
  isWhitelistMintEnabled: boolean;
  isUserInWhitelist: boolean;
  isMining: boolean;
  mintTokens(mintAmount: number): Promise<void>;
}

interface State {
  mintAmount: number;
}

const defaultState: State = {
  mintAmount: 1,
};

export default class MintWidget extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  private canMint(): boolean {
    return !this.props.isPaused || this.canWhitelistMint();
  }

  private canWhitelistMint(): boolean {
    return this.props.isWhitelistMintEnabled && this.props.isUserInWhitelist;
  }

  private incrementMintAmount(): void {
    this.setState({
      mintAmount: Math.min(
        this.props.maxMintAmountPerTx,
        this.state.mintAmount + 1
      ),
    });
  }

  private decrementMintAmount(): void {
    this.setState({
      mintAmount: Math.max(1, this.state.mintAmount - 1),
    });
  }

  private async mint(): Promise<void> {
    if (!this.props.isPaused) {
      await this.props.mintTokens(this.state.mintAmount);

      return;
    }
  }

  render() {
    if (this.props.isMining) {
      return (
        <div className="wallet-connect">
          <button disabled className="disabled-button">MINTING...</button>
        </div>
      );
    }
    return (
      <>
        {this.canMint() ? (
          <div className="wallet-connect">
            <div className="no-of-mints">
              <button onClick={() => this.decrementMintAmount()}>-</button>
              <div className="amount">
                <p>{this.state.mintAmount}</p>
                <span>NFT</span>
              </div>
              <button onClick={() => this.incrementMintAmount()}>+</button>
            </div>
            <button onClick={() => this.mint()}>MINT</button>
          </div>
        ) : (
          <div className="cannot-mint">
            <span className="emoji">⏳</span>
            {this.props.isWhitelistMintEnabled ? (
              <>
                You are not included in the <strong>whitelist</strong>.
              </>
            ) : (
              <>
                The contract is <strong>paused</strong>.
              </>
            )}
          </div>
        )}
      </>
    );
  }
}
