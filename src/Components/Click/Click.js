import React, { Component } from 'react';

class TestClick extends Component {
    constructor(props) {
        super(props);
        this.state = { isClicked: false};
        this.clickHandle = this.clickHandle.bind(this)
    }
    clickHandle(e){
        this.setState({isClicked: true})
    }
    render(){
        return (
            <div>
                <h1>{this.state.isClicked ? "Is Clicked" : "Is not Clicked"}</h1>
                <button onClick={this.clickHandle}>Flick Me!</button>
            </div>
        )
    }
}

export default TestClick