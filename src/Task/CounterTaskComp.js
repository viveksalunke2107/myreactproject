import React, { Component } from 'react'

export class CounterTaskComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    

    render() {
        return (
            <div>
                <h2>This is counter Component</h2>
                <div>Counter value : <strong>{this.state.count}</strong></div>
                <button type='button' onClick={()=>this.setState({count:this.state.count+1})} className='btn btn-primary btn-sm'>++</button>{" "}
                <button type='button' onClick={()=>this.setState({count:this.state.count-1})} className='btn btn-primary btn-sm'>--</button>{" "}
                <button type='button' onClick={()=>this.setState({count:0})}className='btn btn-primary btn-sm'>Reset</button>{" "}
            </div>
        )
    }
}

export default CounterTaskComp
