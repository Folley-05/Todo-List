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
        //this.key=this.todo.key
    }
    checkAllSubComplete=()=>{ // cette fonction verifie si toutes les sous tache sont complete et renvoi un booleen correspondant
        let bol=true
        let sub=this.todo.subTodo
        for(let i=0; i<sub.length; i++) {
            if(!sub[i].complete)
                bol=false
        }
        if(bol) console.log("tout est complet")
        return bol
    }
    setComplete=()=>{ // cette fonction permet de definir l'etat d'une bigTodo 
        this.todo.complete=!this.todo.complete
        localStorage.setItem(this.todo.key, JSON.stringify(this.todo))
        this.setState({change: !this.state.change})
    }
    
    changeSubComplete=e=>{  //cette fonction est appele a chaque fois que le complete d'une subTodo change
        const id=parseInt(this.refSub.current.getId(e)) 
        this.todo.subTodo[id].complete=!this.todo.subTodo[id].complete
        // ici on verifie si toutes les sous subTodo sont complete et on met a jour la bigTodo
        this.todo.complete=this.checkAllSubComplete() //ici on verifie si toute les subTodo sont complete, si c'est le cas alor on complete la generique
        console.log(this.todo)
        //console.log("etat de la sub todo change avec success")
        localStorage.setItem(this.todo.key, JSON.stringify(this.todo))
        this.setState({change: !this.state.change})
    }

    render() {
        return (
            <>
                <li className="list-group-item generic-todo" >
                    <div className="row">
                        <div className="col-9"> <b> {this.todo.title} </b></div>
                        <div className="col-1">
                            <input type="checkbox" checked={this.todo.complete} onChange={this.setComplete}/>
                        </div>
                        <div className="col-1">
                            <input type="checkbox"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-9"> <i>{this.todo.date}</i></div> 
                    </div>
                    
                </li>
                <li className="list-group-item">
                    <div className="ml-4"> 
                        <SubTodo complete={this.todo.complete} ref={this.refSub} Sub={this.todo.subTodo} change={this.changeSubComplete} />
                    </div>
                </li>
                
            </>
        )
    } // la props complete passe ici permet d'afficher toute les subTodo comme complete une fois que la bigTodo est complete 
}

export default BigTodo

//
