import React, { Component } from 'react';

class Coin extends Component{
    render(){
        return(
            <div>
                <img 
                 src={`https://tinyurl.com/react-coin-${this.props.coinState}-jpg`} 
                 width="200" height="200"
                ></img>
            </div>
        )
    }
}
export default Coin;