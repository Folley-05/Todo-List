import React, { Component } from 'react'

export class SubTodo extends Component { // classe de gestion des sous-taches

    getId=e=>{
        return e.target.name
    }
    
    render() {
        const {complete ,Sub, change}=this.props
        const subs=Sub.map((sub, i)=><div key={i} className="list-group-item sub-todo" >
             <div className="row">
                <div className="col-9">{sub.title} </div>
                    <div className="col-2">
                        <input checked={complete || sub.complete  /* ici on affiche la subTodo complete meme si en memoire elle ne l'est pas */} name={sub.id} type="checkbox" onChange={change}/>
                    </div>
                </div>
            </div>
        )
        return (
            <>{subs}</>
                
        )
    }
}

export default SubTodo
