import React, { Component } from "react"
import axios from "axios"

class BitcoinPrice extends Component {
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    const urlAPI = "https://api.coindesk.com/v1/bpi/currentprice.json"
    axios.get(urlAPI)
      .then(result => console.log(result.data))
  }

  render() {
    return (
      <div>Something here</div>
    )
  }
}

export default BitcoinPrice