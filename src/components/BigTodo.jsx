import React, { Component } from 'react'

import SubTodo from './SubTodo'

export class BigTodo extends Component {
    render() {
        return (
            <li className="list-group-item" >
                <div className="row">
                    <div className="col-9 bg-danger">je suis une BigTODO</div> 
                    <div className="col-3 bg-danger"><input type="checkbox"/></div>
                </div>
                
                <ul>
                    <SubTodo />
                </ul>
            </li>
        )
    }
}

export default BigTodo
