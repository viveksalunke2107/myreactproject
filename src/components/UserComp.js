import React from 'react'

const UserComp = ({name}) => {
   
    // const {name} = props;
    if(name==="Rahul"){
     throw Error("Not A user");
    }
    return <p>{name} login Successfully</p> 
}

export default UserComp


