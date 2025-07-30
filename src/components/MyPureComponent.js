
import React, { Component, PureComponent } from 'react'

class MyPureComponent extends PureComponent {


    render() {
        console.log("this is my pure component")
        return (
            <div>
                <h2>This is My prure Component</h2>
                <div>Name : <strong>{this.props.name}</strong></div>
            </div>
        )
    }
}

export default MyPureComponent


