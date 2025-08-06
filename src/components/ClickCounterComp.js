
import React, { Component } from 'react'
import HocComp from './HocComp'

class ClickCounterComp extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count:0
    //     }
    // }
    

    // incrementCounter = ()=>{
    //     this.setState((prevState)=>({count:prevState.count+1}));
    // }
    render() {
        return (
            <div>
                <h2>This is ClickCounterComp</h2>
                {/* <div>Counter value:<strong>{this.state.count}</strong></div>
                <button type='button' onClick={()=>this.incrementCounter()} className='btn btn-primary'>counter ++</button> */}
                <div>Counter value:<strong>{this.props.count}</strong></div>
                <button type='button' onClick={()=>this.props.incrementCounter()} className='btn btn-primary'>counter ++</button>
            </div>
        )
    }
}

// export default ClickCounterComp
export default HocComp(ClickCounterComp) 



