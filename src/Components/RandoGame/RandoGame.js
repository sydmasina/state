import React, { Component } from 'react';

class RandoGame extends Component {
    constructor(props){
        super(props);
        this.state = {num: 0};
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(e){
        let randoNum = Math.floor(Math.random() * 10)
        this.setState({num: randoNum})
    }
    render(){
        return(
            <div>
                <h1>You number is: {this.state.num}</h1>
                {this.state.num === 7 ? 
                    <h1>YOU WIN!</h1> :
                    <button onClick={this.clickHandler} >Flick Me!</button>
                }
                
            </div>
        )
    }
}

export default RandoGame;