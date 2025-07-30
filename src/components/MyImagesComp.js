import React, { Component } from "react";
import samosa from '../shared/images/samosa.jpg'
import vada from '../shared/images/vadapav.jpg'
import myCommanData from "../shared/constant/constantData";

class MyImagesComp extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>This is my Images components</h2>
        <img src={samosa} alt="samosa" height="200px" width="300px" />
        <img src={vada} alt="vada" height="200px" width="300px" />
        <hr/>
        <img src={myCommanData.jalebi} alt="samosa" height="200px" width="300px" />
        <img src={myCommanData.poha} alt="samosa" height="200px" width="300px" />
        <img src={myCommanData.dosa} alt="samosa" height="200px" width="300px" />
        <img src={myCommanData.flyingboy} alt="samosa" height="200px" width="300px" />
      </React.Fragment>
    );
  }
}

export default MyImagesComp;
