import React, { Component } from 'react'

class SimpleTodo extends Component {

    state={
        change: false
    }
    todo=this.props.todo
    handleChange=()=>{
        this.todo.complete=!this.todo.complete
        localStorage.setItem(this.todo.key, JSON.stringify(this.todo))
        this.setState({change: !this.state.change})
    }
    render() {
        return (
            <li className="list-group-item" >
                <div className="row">
                    <div className="col-9" style={{fontSize: "1.6em"}}> <b> {this.todo.title} </b></div> 
                    <label htmlFor={this.todo.key} className="col-1 ">
                        <div className={this.todo.complete ? "check" : "uncheck"}><input style={{display: 'none'}} id={this.todo.key}type="checkbox" checked={this.todo.complete} onChange={this.handleChange} /></div>
                    </label>
                </div>
                <div className="row">
                <div className="col-9" style={{marginTop: -15}}> <i>{this.todo.date}</i></div> 
                </div>
                
            </li>
        )
    }
}

export default SimpleTodo
