import React, { Component } from 'react';
import './Color.css'

class Color extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            blockColor: null
        }
        this.randomColor = this.randomColor.bind(this);
    }
    static defaultProps = {
        defaultColors: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#FFA500", "#800080", "#008000", "#800000", "#008080", "#000080", "#FFC0CB", "#800000", "#FFD700", "#A52A2A"]
    }
    randomColor(){
        let randIdx = Math.floor(Math.random() * this.props.defaultColors.length)
        this.setState({blockColor: this.props.defaultColors[randIdx]})
    }
    render(){
        return(
            <div className='color-div' onClick={this.randomColor} 
            style={{backgroundColor: this.state.blockColor ? this.state.blockColor : this.props.color}}>
            </div>
        )
    }
}

export default Color;