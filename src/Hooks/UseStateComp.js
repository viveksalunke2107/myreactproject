
import React, { useState } from 'react';

const UseStateComp = () => {
     const [name,setName] =  useState("Panchashil");
     const [age,setAge] =  useState(30);
     const [fruits,setFruits] = useState(["Apple","Mango","Banana","Graps","Orange"]);
    //  const [number,setNumber]
     const changeName = ()=>{
        setName("Panchashil Wankhede");
     }

    return (
        <div>
            <h2>This is useState hook Component</h2>
            <p>My Name is:{name}</p>
            <button type='button' onClick={()=>changeName()}>change Name</button>{" "}
            <button type='button' onClick={()=>setName("Panchashil M. Wankhede")}>change Name</button>
             <p>My Age is:{age}</p>
            <button type='button' onClick={()=>setAge(age+1)}>change Age</button>{" "}
            <ul>
                { fruits.length > 0 && fruits.map((val,index)=>{
                    return <li key={index}>{val}</li>
                })}
            </ul>
        </div>
    )
}

export default UseStateComp
