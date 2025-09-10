import axios from 'axios';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const ProductDashboardComp = () => {

    const [produts, setProdutcs] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])
    // write code for get request
    const fetchData = () => {
        axios.get("http://localhost:9999/products").then((res) => {
            console.log(res.data);
            setProdutcs(res.data)
        }).catch((error) => { });
    }
    // write code for delete request 
    const deleteProduct = (id) => {

        if (window.confirm(`Are you sure to delete product with id:${id}`)) {

            axios.delete(`http://localhost:9999/products/${id}`).then(() => {
                window.alert("product deleted successfully");
                fetchData();
            }).catch((error) => { });

        }

    }
    return <>
        <h2>This is ProductDashboardComp</h2>
        <Link to="/maindashboard/productadd" className='btn btn-primary mt-2 mb-2'>Add</Link>
        <table className='table table-bordered table-hover table-striped'>
            <thead>
                <tr>
                    <th>Sr.No</th><th>Name</th><th>Price</th><th>Company</th><th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    produts.map((val, index) => {
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{val.pname}</td>
                            <td>{val.pprice}</td>
                            <td>{val.pcompany}</td>
                            <td>
                                <Link to={`/maindashboard/productedit/${val.id}`}  className='btn btn-outline-success btn-sm'>Edit</Link> |
                                <button type='button' onClick={() => deleteProduct(val.id)} className='btn btn-outline-danger btn-sm'>Delete</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
}

export default ProductDashboardComp;
