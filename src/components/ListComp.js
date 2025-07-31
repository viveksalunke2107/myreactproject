import React, { Component } from 'react'

class ListComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             breakfast:[{id:1,name:"Samosa"},{id:2,name:"Dosa"},{id:3,name:"poha"},{id:4,name:"Upma"},{id:5,name:"vada"}]
        }

        // setTimeout(()=>{
        //     const newArr = this.state.breakfast;
        //     const intemIndex = this.state.breakfast.findIndex(val=>val.name==="Dosa");
        //     const item = this.state.breakfast.find(val=>val.name==="Dosa");
        //     if(item){
        //        newArr.splice(intemIndex,1,{...newArr,name:"Masala Dosa"});
        //        this.setState(newArr);
        //     }
        // },3000);
    }
    
    render() {
        return (
            <div>
                <h2>This is List Component</h2>
                <ul>
                    {this.state.breakfast.map((val,index)=>{
                        return <li key={val.id}>{val.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default ListComp;
