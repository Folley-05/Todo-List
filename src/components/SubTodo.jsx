import React, { Component } from 'react'

export class SubTodo extends Component {
    render() {
        const {Sub}=this.props
        console.log(this.props)
        const subs=Sub.map((sub, i)=><div key={i} className="list-group-item sub-todo" >
                                    <div className="row">
                                        <div className="col-9">{sub.title} </div>
                                        <div className="col-2">
                                            <input type="checkbox"/>
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
