import React, { Component } from "react";
import axios from "axios";
import BitcoinPrice from "../components/BitcoinPrice";

class BitcoinPriceContainer extends Component {
  state = {
    bpi: {}
  };

  componentDidMount() {
    const urlAPI = "https://api.coindesk.com/v1/bpi/currentprice.json";
    axios
      .get(urlAPI)
      .then(result => {
        const { bpi } = result.data;
        this.setState({ bpi });
      })
      .catch(e => console.log(e));
  }

  render() {
    return <BitcoinPrice bpi={this.state.bpi} />;
  }
}

export default BitcoinPriceContainer;
