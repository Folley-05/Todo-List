import React, { Component } from 'react'
import SimpleTodo from './SimpleTodo'
import BigTodo from './BigTodo'

class TodoList extends Component {
    render() {
        return (
            <div>
                <ul className="list-group" >
                    <SimpleTodo />
                    <BigTodo />
                    <SimpleTodo />
                </ul>
            </div>
        )
    }
}

export default TodoList
