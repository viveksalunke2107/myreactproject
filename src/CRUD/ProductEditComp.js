import {useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigate,useParams} from "react-router-dom";

const ProductAddComp = ()=>{
    const nav =useNavigate();
    const {id} = useParams();
    const [products,setProdutcs] = useState({
        id:'',
        pname:'',
        pprice:'',
        pcompany:''
    });

    useEffect(()=>{
        axios.get(`http://localhost:9999/products/${id}`).then((res)=>{
           setProdutcs(res.data);
        }).catch((error)=>{})
    },[])

    const inputChangeHandler = (event)=>{
      setProdutcs({...products,[event.target.name]:event.target.value});
    }
    const updateData = (event)=>{
      event.preventDefault();
      axios.put(`http://localhost:9999/products/${id}`,products).then(()=>{
        window.alert("Product updated successfully");
        nav("/maindashboard/productdash");
      }).catch((error)=>{})
    }
    return <>
     <h1>This is Product Edit Comp</h1>
     <form onSubmit={updateData}>
        <input type="text" name="pname" onChange={inputChangeHandler} placeholder='enter product name' value={products.pname} /> <br/><br/>
        <input type="text" name="pprice" onChange={inputChangeHandler} placeholder='enter product price'  value={products.pprice}/> <br/><br/>
        <input type="text" name="pcompany" onChange={inputChangeHandler} placeholder='enter product company'  value={products.pcompany}/> <br/><br/>
        <button type='submit' className='btn btn-primary'>Submit</button>
     </form>
    </>
} 
export default ProductAddComp;