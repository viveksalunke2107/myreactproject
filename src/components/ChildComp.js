

const ChildComp = (props)=>{

    return (<>
     <h2>This is Child components</h2>
     <div>Name : {props.name}</div>
     <div>Salary : {props.sal}</div>
     <div>Age : {props.age}</div>
     <button type="button" onClick={props.changeData}> change Data</button>
    </>)
}

export default ChildComp;

