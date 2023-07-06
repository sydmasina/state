import React, { Component } from 'react';

class TodoItem extends Component {
    render(){
        return(
            <li><b>{this.props.task}</b>... spend <b>{this.props.time}</b> on this.</li>
        )
    }
}
export default TodoItem;