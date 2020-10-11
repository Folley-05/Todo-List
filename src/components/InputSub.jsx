import React from 'react'

const InputSub=React.forwardRef((props, fref)=>{
    return (
        <div style={{marginLeft: 30}} className="form-group">
            <label htmlFor="title">titre de la sous todo</label>
            <input ref={fref} type="text" className="form-control" id="title" required/>
            <label style={{color: 'red', display: props.require}} htmlFor="type">this input is required</label>
        </div>
    )
})

export default InputSub
