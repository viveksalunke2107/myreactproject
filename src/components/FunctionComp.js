
// function FunctionComp(){
//     return <h2>this is Function component</h2>
// }
const FunctionComp = (props) => {

    return (
     <div>
        <h2>this is Function component</h2>
        <p>Name:{props.name}, Address: {props.address}</p>
    </div> )
}

export default FunctionComp;