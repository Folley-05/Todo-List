import React, { Component } from 'react'

class SimpleTodo extends Component {
    render() {
        return (
            <li className="list-group-item" >
                <div className="row">
                    <div className="col-9 bg-danger">je suis une TODO</div> 
                    <div className="col-3 bg-danger"><input type="checkbox"/></div>
                </div>
                
            </li>
        )
    }
}

export default SimpleTodo
