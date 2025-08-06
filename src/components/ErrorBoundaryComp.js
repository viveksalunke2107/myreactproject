import React, { Component } from 'react'

class ErrorBoundaryComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            hasValue:false 
        }
    }
    
    static getDerivedStateFromError(){
        return {
            hasValue:true
        }
    }

    render() {
       
        if(this.state.hasValue){
           return <div><strong>Not A User</strong></div>
        }
        return this.props.children;
    }
}

export default ErrorBoundaryComp
