
import React from 'react'
import { useNavigate ,Link} from 'react-router-dom'

const NavComp = () => {
const nav = useNavigate();

    const logout=()=>{
      if(window.confirm('are you sure to logout')){
        sessionStorage.removeItem("user");
        nav('/login');
      }
    };

    return (
        <div>
           {/* <h2>This is Nav Component</h2>  */}
           <Link to="myimages" className='btn btn-primary btn-sm'>MyImages</Link>{" "}
           <Link to="parent" className='btn btn-primary btn-sm'>Parent</Link>{" "}
           <Link to="mycss" className='btn btn-primary btn-sm'>myCss</Link>{" "}
           <Link to="hooks" className='btn btn-primary btn-sm'>ReactHooks</Link>{" "}
           <Link to="formval" className='btn btn-primary btn-sm'>Forms</Link>{" "}
           <Link to="productdash" className='btn btn-outline-success btn-sm'>ProductDash</Link>{" "}
           <Link to="carousal" className='btn btn-outline-success btn-sm'>Carousal</Link>{" "}
            <button type='button' style={{float:"right"}} onClick={logout} className='btn btn-outline-danger btn-sm'>Logout</button>{" "}
        </div>
    )
}

export default NavComp
