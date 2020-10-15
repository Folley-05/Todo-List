import React, { Component } from 'react'

import SubTodo from './SubTodo'

export class BigTodo extends Component {
    render() {
        const {todo}=this.props
        return (
            <>
                <li className="list-group-item generic-todo" >
                    <div className="row">
                        <div className="col-9"> <b> {todo.title} </b></div>
                        <div className="col-1">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-1">
                            <input type="checkbox"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-9"> <i>{todo.date}</i></div> 
                    </div>
                    
                </li>
                <li className="list-group-item">
                    <div className="ml-4">
                        <SubTodo Sub={todo.subTodo} />
                    </div>
                </li>
                
            </>
        )
    }
}

export default BigTodo

//
