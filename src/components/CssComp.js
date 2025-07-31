import React, { Component } from "react";
import './external.css'
import mymodule from './vivek.module.css'

class CssComp extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
      cond1: true,
      cond2: false,
    };
  }

  myCssProperty = {
    color: true ? "red" : "green",
    backgroundColor: false ? "aqua" : "gray",
    fontSize: false? "20px" : "30px",
  };

  render() {
    return (
      <div>
        {/* 1.internal css  */}
        <h2 style={{ color: "dodgerblue", backgroundColor: "lightgray" }}>
          This is my Css Component
        </h2>
        <div style={this.myCssProperty}>Panchashil M Wankhede</div>
         {/*2.use of external css  */}
        <div className="txt-primary">Vivek Salunke</div>
        <div className="txt-warning">Akshay Kanade</div>
        <h2 className={mymodule.special}>Hematite infotech pvt Ltd</h2>
      </div>
    );
  }
}

export default CssComp;
