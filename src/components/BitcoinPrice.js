import React from "react"

// class BitcoinPrice extends React.Component {
//   _renderCurrencies = () => {
//     const { bpi } = this.props;
//     return Object.keys(bpi)
//       .map((currency, idx) => <div key={idx}>{currency}: {bpi[currency].rate}</div>)
//   };

//   render() {
//     return <div>{this._renderCurrencies()}</div>
//   }
// }

const BitcoinPrice = (props) => {
    const { bpi } = props;
    return Object.keys(bpi)
      .map((currency, idx) => <div key={idx}>{currency}: {bpi[currency].rate}</div>)
}

export default BitcoinPrice