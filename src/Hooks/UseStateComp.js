
import React, { useState } from 'react';

const UseStateComp = () => {
     const [name,setName] =  useState("Panchashil");
     const [age,setAge] =  useState(30);
     const [fruits,setFruits] = useState(["Apple","Mango","Banana","Graps","Orange"]);
    //  const [number,setNumber]
     const changeName = ()=>{
        setName("Panchashil Wankhede");
     }
     const [data,setData] = useState (
         [
            { eid: 101, name: "Akshay", post: "Develporer", salary: 5500000 },
            { eid: 102, name: "Vivek", post: "Develporer", salary: 5500000 },
            { eid: 103, name: "Rohan", post: "Develporer", salary: 5500000 },
            { eid: 104, name: "Prathmesh", post: "Develporer", salary: 5500000 },
            { eid: 105, name: "Prasad", post: "Develporer", salary: 5500000 }
          ]
     )

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

            <h2>This is EmpDetailComp</h2>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Emp Id</th>
              <th>Name</th>
              <th>Post</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val, index) => {
              return (
                <tr>
                  <td>{val.eid}</td>
                  <td>{val.name}</td>
                  <td>{val.post}</td>
                  <td>{val.salary}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <hr />
     
        </div>
    )
}

export default UseStateComp
