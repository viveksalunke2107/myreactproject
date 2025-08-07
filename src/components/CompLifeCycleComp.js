import React, { Component } from 'react'

class CompLifeCycleComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             color:"red"
        }
    }

    // static getDerivedStateFromProps(props){
    //     return{
    //         color:props.mycolor
    //     }
    // }

    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.setState({color:"Yellow"})
    //     },2000)
    // }

    shouldComponentUpdate(){
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
      document.getElementById("beforeUpdate").innerHTML = `my favourite was brefore update:${prevState.color}`;
    }
    componentDidUpdate(){
       document.getElementById("afterUpdate").innerHTML = `my favourite after update is:${this.state.color}`
    }

    render() {
        return (
            <div>
                <h2>my color is:{this.state.color}</h2>
                <div id="beforeUpdate"></div>
                <div id="afterUpdate"></div>
                <button type='button' onClick={()=>this.setState({color:"Blue"})} className='btn btn-primary'>change Color</button>
            </div>
        )
    }
}

export default CompLifeCycleComp
