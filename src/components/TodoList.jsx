import React, { Component } from 'react'
import SimpleTodo from './SimpleTodo'
import BigTodo from './BigTodo'


class TodoList extends Component { // composant qui permet d'afficher la liste des todos (taches) et bizarrement il ne gere rien d'autre



    getTodos=()=>{
        let a=[]
        for(let i=-1; i<localStorage.length; i++) {
            let b="key"+i
            if(localStorage.key(i)!=null) {
                console.log("exist")
                a.push(JSON.parse(localStorage.getItem(b)))  
            }
            else
            console.log("exist pas")
        }
        return a
            
    }

    render() {
        const Todos=this.getTodos().map((todo, i)=>{
            if(todo.type=="1") {
                return <SimpleTodo key={i} todo={todo} />
            }
            else
            return <BigTodo key={i} todo={todo} />
        })
        return (
            <div className="mb-5">
                <ul className="list-group" >
                    {Todos}
                </ul>
            </div>
        )
    }
}

export default TodoList
