import React, { Component } from 'react'
import InputSub from './InputSub'

class AddTodo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            required: 'none',
            change: true,
            selectChange: false
        }

        this.handleClick=this.handleClick.bind(this)
        this.input=React.createRef()
        this.select=React.createRef()
        this.addSimpleTodo=this.addSimpleTodo.bind(this)
        this.add=this.add.bind(this)
        this.References=[React.createRef()]
        this.Sub=[<InputSub key={this.References.length} ref={this.References[0]} require={this.state.required} />]
        this.type="block"
    }
    // fin de la definition du constructeur

    // fonction d'ajout d'une simpleTodo
    addSimpleTodo=()=>{
        let key='key'+localStorage.length
        let todo={
            type: this.select.current.value,
            title: this.input.current.value,
            date: Date.parse(new Date()) 
        }
        localStorage.setItem(key, JSON.stringify(todo))
        //console.log(key +" : "+JSON.stringify(todo))
    }
    // fonction d'ajout d'une GenericTodo
    addGenericTodo=()=>{
        let key='key'+localStorage.length
        let sub=this.References.map(ref=>ref.current.value)
        let todo={
            type: this.select.current.value,
            title: this.input.current.value,
            subTodo: sub,
            nomber: sub.length,
            date: Date.parse(new Date()) 
        }
        localStorage.setItem(key, JSON.stringify(todo))
    }
    handleClick=(e)=>{
        e.preventDefault()
        if(this.state.selectChange) {
            let empty=false
            this.References.forEach(ref=>{
                if(ref.current.value=="")
                    empty=true
            })
            if(!empty && this.input.current.value && this.select.current.value) {
                this.addGenericTodo()
            }
            else {
                this.setState({
                    required: 'inline'
                })
                console.log('non')
            }
        }
        else {
            if(this.input.current.value && this.select.current.value) {
                this.addSimpleTodo()
            }
            else {
                this.setState({
                    required: 'inline'
                })
                console.log('non')
            }
        }

        
        return false
    }
    handleChange=(e)=>{
        if (e.target.value==="2") {
            this.setState({
                selectChange: true
            })
        }
        else {
            this.setState({
                selectChange: false
            }) 
        }
        console.log(this.state)
    }
    add=(e)=>{
        e.preventDefault()
        this.References.push(React.createRef())
        /*this.Sub=[]
        for(let i=0; i<this.References.length; i++) {
            this.Sub.push(<InputSub key={i} ref={this.References[i]} require={this.state.required} />)
        }*/

        
        //this.Sub.push(<InputSub key={this.References.length} ref={this.References[this.References.length-1]} require={this.state.required} />)
        this.setState({
            required: this.state.required,
            change: !this.state.change
        })
    }

    render() {
        //console.log(this.Sub[this.Sub.length-1])

        this.Sub=[]
        for(let i=0; i<this.References.length; i++) {
            this.Sub.push(<InputSub key={i} ref={this.References[i]} require={this.state.required} focus={true} />)
        }
        
        return (
            <div>
                <h3>Nouvelle Todo</h3>
                <form action="">
                    <div className="form-group row">
                        <div className="col-10"><label htmlFor="type">selectionner le type de todo</label></div>
                        <div className="col-sm-11">
                            <select ref={this.select} name="select" id="type" className="form-control" onChange={this.handleChange} required>
                                <option value="">choisir le type de todo</option>
                                <option value="1">simple todo</option>
                                <option value="2">generic todo</option>
                            </select>
                        </div>
                        <div className="col-sm-1 justify-content-end">
                            {this.state.selectChange && <button className="btn btn-primary" onClick={this.add}>+</button>}
                        </div>
                        <label style={{color: 'red', display: this.state.required}} htmlFor="type">this input is required</label>
                    </div>
                    <div className="form-group">
                        <div style={{display: 'none'}} className="simpletodo">
                            <label htmlFor="title">titre de la todo</label>
                            <input ref={this.input} type="text" className="form-control" id="title" required/>
                            <label style={{color: 'red', display: this.state.required}} htmlFor="type">this input is required</label>
                        </div>
                        <div style={{display: this.type}} className="generictodo">
                            <div className="form-group">
                                <label htmlFor="title">titre de la todo</label>
                                <input ref={this.input} type="text" className="form-control" id="title" required/>
                                <label style={{color: 'red', display: this.state.required}} htmlFor="type">this input is required</label>
                            </div>
                            
                            {this.state.selectChange && this.Sub.map(appar=> appar)}

                        </div>
                        
                    </div>
                    <div className="form-group col-8">
                        <button type="submit" className="btn btn-success form-control" onClick={this.handleClick}>enregistrer</button>
                    </div> 
                    
                </form>
            </div>
        )
    }
}

export default AddTodo


//<InputSub require={this.state.required} ref={this.References[0]} />