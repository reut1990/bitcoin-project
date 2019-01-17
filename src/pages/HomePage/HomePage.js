import React, { Component } from 'react'
import UserService from '../../services/UserService'
import BitcoinService from '../../services/BitcoinService'
import './HomePage.css'
import MovesList from '../../components/movesList/MovesList'
import coins from '../../assets/img/coins.png'
import bitcoin from '../../assets/img/BTC.png'

class HomePage extends Component {

  state = {
    user: {},
    coinsRate: ''
  }

 async componentDidMount() {
    const user =await UserService.loadUser();
    if (user===null) return 
    const coinsRate = await BitcoinService.getRate(user.coins);
    this.setState({ user, coinsRate });
  }

  render() {
    const { user, coinsRate } = this.state
    if (user===null) return 
    const props={inCmp:"homePage", movesList:this.state.user.moves, title:"Your last 3 moves:"}
    return (
      <div>
        <div className="container">
          <h4 className="center">Hello {user.name}</h4>
          <div className="home-coins-container">
            <img src={coins} alt="icon" />
            <p>Coins: {user.coins} </p>
          </div>
          <div className="home-rate-container">
            <img src={bitcoin} alt="icon"></img>
            <p>BTC:{coinsRate}</p>
          </div>
        </div>
           <MovesList {...props} />
      </div>
    )
  }
}

export default HomePage