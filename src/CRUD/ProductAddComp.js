import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const ProductAddComp = ()=>{
    const nav =useNavigate();

    const [products,setProdutcs] = useState({
        pname:'',
        pprice:'',
        pcompany:''
    });

    const inputChangeHandler = (event)=>{
      setProdutcs({...products,[event.target.name]:event.target.value});
    }
    const addData = (event)=>{
      event.preventDefault();
      axios.post(`http://localhost:9999/products`,products).then(()=>{
        window.alert("Product Added successfully");
        nav("/maindashboard/productdash");
      }).catch((error)=>{})
    }
    return <>
     <h1>This is ProductAddComp</h1>
     <form onSubmit={addData}>
        <input type="text" name="pname" onChange={inputChangeHandler} placeholder='enter product name' value={products.pname} /> <br/><br/>
        <input type="text" name="pprice" onChange={inputChangeHandler} placeholder='enter product price'  value={products.pprice}/> <br/><br/>
        <input type="text" name="pcompany" onChange={inputChangeHandler} placeholder='enter product company'  value={products.pcompany}/> <br/><br/>
        <button type='submit' className='btn btn-primary'>Submit</button>
     </form>
    </>
} 
export default ProductAddComp;