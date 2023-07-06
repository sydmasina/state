import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            Todos: [
                {task: "Learn REACT", time: "6hours", id: 1},
                {task: "Arm workout", time: "1hour", id: 2}
            ]
        }
    }

    render(){
        return (
            <div>
                <h1>Todo List</h1>
                <ul>
                    {this.state.Todos.map(todo=>{
                        return <TodoItem {...todo} />
                    })}
                </ul>
            </div>
        )
    }

}

export default TodoList;