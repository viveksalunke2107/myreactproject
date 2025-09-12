import axios from 'axios';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const ProductDashboardComp = () => {

    const [produts, setProdutcs] = useState([]);
    const [show, setShow] = useState(false);
    const [singleItem,setSingleItem] = useState({}) 

  const handleClose = () => setShow(false);
  const handleShow = (valObj) => {
    setShow(true);
    setSingleItem(valObj);
};


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
        <Link to="/maindashboard/productadd" className='btn btn-primary mt-2 mb-2'>
         <AddIcon></AddIcon> Add
        </Link>
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
                                <button type='button' onClick={()=>handleShow(val)} className='btn btn-outline-primary btn-sm'>
                                 <VisibilityIcon></VisibilityIcon>
                                </button> |
                                <Link to={`/maindashboard/productedit/${val.id}`}  className='btn btn-outline-success btn-sm'>
                                    <ModeEditIcon></ModeEditIcon>
                                </Link> |
                                <button type='button' onClick={() => deleteProduct(val.id)} className='btn btn-outline-danger btn-sm'>
                                    <DeleteIcon></DeleteIcon>
                                </button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        {/* model popup code  */}
         <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{singleItem.pname}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <strong>Id:</strong>{singleItem.id} <br/>
          <strong>Name:</strong>{singleItem.pname} <br/>
          <strong>Price:</strong>{singleItem.pprice} <br/>
          <strong>Company:</strong>{singleItem.pcompany} <br/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      
    </>
}

export default ProductDashboardComp;
