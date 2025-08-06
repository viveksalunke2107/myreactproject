import React, { Component } from 'react'
import HocComp from './HocComp'

class HoverCounterComp extends Component {
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
                <h2>This is HoverCounterComp</h2>
                {/* <p>Counter Value:<strong>{this.state.count}</strong></p>
                <h2 onMouseOver={()=>this.incrementCounter()}>Hover on me to increment count value</h2> */}
                <p>Counter Value:<strong>{this.props.count}</strong></p>
                <h2 onMouseOver={()=>this.props.incrementCounter()}>Hover on me to increment count value</h2>
            </div>
        )
    }
}

// export default HoverCounterComp
export default HocComp(HoverCounterComp) 

