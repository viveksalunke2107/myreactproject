import React, { Component } from 'react';


class FriendsDetailComp extends Component{
    render(){
        return <div>
            <h1>Name:{this.props.name} Mobile No:{this.props.no} Gender:{this.props.gender} Address:{this.props.add}</h1>

        </div>
    }
}

export default FriendsDetailComp;