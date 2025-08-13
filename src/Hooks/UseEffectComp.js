import React, { useEffect, useState } from "react";

const UseEffectComp = () => {
  const [count, setCount] = useState(0);
  const [salary, setSalary] = useState(20000);

  // case 1 : not dependecy value pass(ComponentDidMount)
  // useEffect(()=>{
  //     setCount(count+1);
  // });

  //   case 2: when dependecy value pass as blanck arrray (shouldComponentUpdate)
  //   useEffect(() => {
  //     setCount(count + 1);
  //   }, []);

  //   case3: when dependecy value pass in an array.
  useEffect(() => {
    setCount(count + 1);
  }, [salary]);

  return (
    <div>
      <h2>This is useEffect Hoook componet</h2>
      <p>Count Value is:{count}</p>
      <p>Salary is:{salary}</p>
      <button type="button" onClick={()=>setSalary(salary+1000)}>Increment Salary</button>
    </div>
  );
};

export default UseEffectComp;
