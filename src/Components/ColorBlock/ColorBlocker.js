import React, { Component } from 'react';
import Color from './Color';
import './Color.css';

class ColorBlocker extends Component {
    static defaultProps = {
        colors: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#FFA500", "#800080", "#008000", "#800000", "#008080", "#000080", "#FFC0CB", "#800000", "#FFD700", "#A52A2A"]
    }
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className='colorBlocker-wrapper'>
                {
                this.props.colors.map(color=>{
                    return <Color color={color}/>
                })
                }
            </div>
            
        )
    }
}
export default ColorBlocker;