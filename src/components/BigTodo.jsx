import React, { Component } from 'react'
import SubTodo from './SubTodo'


// le bigTodo fait reference a une tache genire et le subTodo a une sous tache d'une tache generique
export class BigTodo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             change: false
        }
        this.todo=this.props.todo
        this.refSub=React.createRef()
        this.classRef=React.createRef()
        this.display=false
        //this.key=this.todo.key
    }
    checkAllSubComplete=()=>{ // cette fonction verifie si toutes les sous tache sont complete et renvoi un booleen correspondant
        let bol=true
        let sub=this.todo.subTodo
        for(let i=0; i<sub.length; i++) {
            if(!sub[i].complete)
                bol=false
        }
        return bol
    }
    setComplete=()=>{ // cette fonction permet de definir l'etat d'une bigTodo 
        this.todo.complete=this.checkAllSubComplete()
        localStorage.setItem(this.todo.key, JSON.stringify(this.todo))
        this.setState({change: !this.state.change})
    }
    
    changeSubComplete=e=>{  //cette fonction est appele a chaque fois que le complete d'une subTodo change
        const id=parseInt(this.refSub.current.getId(e)) 
        this.todo.subTodo[id].complete=!this.todo.subTodo[id].complete
        // ici on verifie si toutes les sous subTodo sont complete et on met a jour la bigTodo
        this.todo.complete=this.checkAllSubComplete() //ici on verifie si toute les subTodo sont complete, si c'est le cas alor on complete la generique
        
        //console.log("etat de la sub todo change avec success")
        localStorage.setItem(this.todo.key, JSON.stringify(this.todo))
        this.setState({change: !this.state.change})
    }
    handleDrop=e=>{
        this.display=!this.display
        this.setState({change: !this.state.change})
    }

    render() {
        return (
            <>
                <li className="list-group-item generic-todo" >
                    <div className="row">
                        <div className="col-9" style={{fontSize: "1.8em"}}> <b> {this.todo.title} </b></div>
                        <label style={{marginRight: 10}} htmlFor={this.todo.key} className="col-1">
                            <div style={{marginTop: 10}} className={`${this.todo.complete ? "check" : "uncheck"}`}>
                                <input style={{display: 'none'}} id={this.todo.key} type="checkbox" checked={this.todo.complete} onChange={this.setComplete}/>
                            </div>
                        </label>
                        <label htmlFor={this.todo.key+"1"} className="col-1">
                            <div style={{marginTop: 10}} className={this.display ? "down" : "up"}>
                                <input id={this.todo.key+"1"} style={{display: 'none'}} type="checkbox" onChange={this.handleDrop}/>
                            </div>
                        </label>
                    </div>
                    <div className="row">
                        <div className="col-9" style={{marginTop: -15}}> <i>{this.todo.date}</i></div> 
                    </div>
                    
                </li>
                <li ref={this.classRef} className="list-group-item contain">
                    <div className="subcontain">
                        {this.display&&<div className="ml-4 port"> 
                            <SubTodo complete={this.todo.complete} ref={this.refSub} Sub={this.todo.subTodo} change={this.changeSubComplete} />
                        </div>}
                    </div>
                    
                </li>
                
            </>
        )
    } // la props complete passe ici permet d'afficher toute les subTodo comme complete une fois que la bigTodo est complete 
}

export default BigTodo

//
