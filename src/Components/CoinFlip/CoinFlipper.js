import React, { Component } from 'react';
import Coin from './Coin.js';
import './CoinFlipper.css'

class CoinFlipper extends Component {
    constructor(props){
        super(props);
        this.state = {
            coinState: '',
            flipCount: 0,
            headsCount: 0,
            tailCount: 0
        }
        this.flipCoin = this.flipCoin.bind(this)
    }
    static defaultProps = {
        coinPosition: {
            0: "heads",
            1: "tail"
        }
    }
    incrementCount(currentState){
        return {flipCount: currentState.flipCount + 1}
    }
    incrementHeadCount(currentState){
        return {headsCount: currentState.headsCount + 1}
    }
    incrementTailCount(currentState){
        return {tailCount: currentState.tailCount + 1}
    }
    flipCoin(){
        let randomIndx = Math.floor(Math.random() * 2);
        let coinState = this.props.coinPosition[randomIndx]
        this.setState({coinState: coinState})
        this.setState(this.incrementCount);
        if(coinState ==='heads'){
            this.setState(this.incrementHeadCount)
        }else if(coinState ==='tail'){
            this.setState(this.incrementTailCount)
        }
    }
    render(){
        return(
            <div>
                <h1>Let's Flip a Coin!</h1>
                { this.state.flipCount > 0 && <Coin coinState={this.state.coinState}/>}
                <button onClick={this.flipCoin} className='CoinFlipper-button'>FLIP MEEEE</button>
                <p>Out of <b>{this.state.flipCount}</b> there has been <b>{this.state.headsCount}</b> heads and <b>{this.state.tailCount}</b> tails. </p>
            </div>
        )
    }
}
export default CoinFlipper;