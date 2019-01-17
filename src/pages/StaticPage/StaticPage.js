import React, { Component } from 'react'
import Chart from '../../components/Chart'
import BitcoinService from '../../services/BitcoinService';


class StaticPage extends Component {

  state = {
    marketPricetData: {},
    confirmedTransactionsData: {}
  }


  async componentDidMount() {
    const marketPricetData = await BitcoinService.getMarketPrice();
    // marketPricetData.data.map(point=>{return {x:(+point.x),y:(+point.y)}})
    const confirmedTransactionsData = await BitcoinService.getConfirmedTransactions();
    // confirmedTransactionsData.data.map(point=>{return {x:(+point.x),y:(+point.y)}})

    this.setState({ marketPricetData, confirmedTransactionsData });


  }


  render() {
    const { marketPricetData, confirmedTransactionsData } = this.state;
    return (
      <div>
        <div className="static-container">
          <h4 className="center">Statics</h4>
          <Chart title={marketPricetData.tite}
                 description={marketPricetData.description}
                 data={marketPricetData.data} />
          <Chart title={confirmedTransactionsData.tite}
                 description={confirmedTransactionsData.description}
                 data={confirmedTransactionsData.data} />
        </div>
      </div>
    )
  }

}

export default StaticPage