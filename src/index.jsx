import React from "react";
import "./flipcoin.css";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

// Create the keyframes
const fadeIn = keyframes`
  0%   {opacity: 0}
  25% {opacity: 0}
  50%  {opacity: 0}
  100% {opacity: 1}
`;

const Subtitle = styled.div`
  animation: ${fadeIn} 4s linear 1;
  font-size: 1.2rem;
  text-transform: uppercase;
`;

class FlipCoin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      nader: "nader",
      champion: null,
      options: [],
    };
    this.coinToss = this.coinToss.bind(this);
  }

  coinToss() {
    this.setState({ nader: "" }, () => {
      if (Math.random() < 0.5) {
        this.setState({ result: "heads", champion: 0 });
      } else {
        this.setState({ result: "tails", champion: 1 });
      }
    });
  }

  componentDidMount() {
    const { aleatory, winner, options } = this.props;

    this.setState({ champion: winner, options: options });

    if (aleatory) {
      this.coinToss();
      return;
    }

    if (winner === 1) {
      this.setState({ result: "tails" });
    } else {
      this.setState({ result: "heads" });
    }
  }

  render() {
    const { winnerMessage } = this.props;
    const { options } = this.state;
    return options.length ? (
      <div className="container">
        <div className="App">
          <div id="coin" className={this.state.result} key={+new Date()}>
            <div
              className="side-a"
              style={{
                backgroundImage: "url(" + this.props.options[0].photo + ")",
              }}
            ></div>
            <div
              className="side-b"
              style={{
                backgroundImage: "url(" + this.props.options[1].photo + ")",
              }}
            ></div>
          </div>
        </div>
        {winnerMessage && (
          <Subtitle>{this.props.options[this.state.champion].name}</Subtitle>
        )}
      </div>
    ) : (
      <div />
    );
  }
}

FlipCoin.propTypes = {
  options: PropTypes.object,
  aleatory: PropTypes.bool,
  winner: PropTypes.number,
  winnerMessage: PropTypes.bool,
};

export default FlipCoin;
