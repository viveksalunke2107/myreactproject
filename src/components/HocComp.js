import React, { Component } from "react";

const HocComp = (WrapperComponent) => {

  class Hoc extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCounter = () => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
      return <WrapperComponent count={this.state.count} incrementCounter={this.incrementCounter}></WrapperComponent>
    }
  }

  return Hoc;
};

export default HocComp;
