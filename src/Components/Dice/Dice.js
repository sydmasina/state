import React, { Component } from 'react';
import './Dice.css';

class Dice extends Component {
    constructor(props){
        super(props);
        this.state = {
            dice1: 'four',
            dice2: 'one',
            isRolling: false
        };
        this.rollDice = this.rollDice.bind(this);
    }
    static defaultProps = {
        diceValues: {
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six'
        }
    };
    rollDice(e){
        let rolledDice1 = this.props.diceValues[Math.floor(Math.random() * 6) + 1]
        let rolledDice2 = this.props.diceValues[Math.floor(Math.random() * 6) + 1]

        this.setState({isRolling: true})
        setTimeout(()=>{
            this.setState({dice1: rolledDice1, dice2: rolledDice2})
            this.setState({isRolling: false})
        }, 2000)
    }
    render(){
        let shakeDice = this.state.isRolling ? "dice-roll-dice" : "";
        let rollButtonText = this.state.isRolling ? "Rolling..." : "Roll Dice";
        let dice1Class = `${shakeDice} dice-icon fa fa-solid fa-dice-${this.state.dice1} fa-flip-horizontal fa-8x`
        let dice2Class = `${shakeDice} dice-icon fa fa-solid fa-dice-${this.state.dice2} fa-flip-horizontal fa-8x`
        let disableButton = this.state.isRolling ? true : false;
        return(
            <div>
                <i class={dice1Class}></i>
                <i class={dice2Class}></i>
                <div>
                    <button disabled={disableButton} className='dice-roll-button' onClick={this.rollDice}>{rollButtonText}</button>
                </div>
            </div>
            
        )
    }
}

export default Dice;