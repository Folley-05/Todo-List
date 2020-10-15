import React, { Component } from 'react'

class SimpleTodo extends Component {
    render() {
        const {todo}=this.props
        return (
            <li className="list-group-item" >
                <div className="row">
                    <div className="col-9"> <b> {todo.title} </b></div> 
                    <div className="col-3"><input type="checkbox"/></div>
                </div>
                <div className="row">
                <div className="col-9"> <i>{todo.date}</i></div> 
                </div>
                
            </li>
        )
    }
}

export default SimpleTodo
