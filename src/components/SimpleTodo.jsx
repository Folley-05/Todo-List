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
        //const {todo}=this.props
        console.log(this.todo)
        return (
            <li className="list-group-item" >
                <div className="row">
                    <div className="col-9"> <b> {this.todo.title} </b></div> 
                    <div className="col-3"><input type="checkbox" checked={this.todo.complete} onChange={this.handleChange} /></div>
                </div>
                <div className="row">
                <div className="col-9"> <i>{this.todo.date}</i></div> 
                </div>
                
            </li>
        )
    }
}

export default SimpleTodo
