import React, { Component } from 'react';

class ClassComp extends Component {

    render() {
        return <div>
            <h2>This is Class Component</h2>
            <p>Name:{this.props.name}, Address:{this.props.address} </p>
        </div>
    }
}

export default ClassComp;


