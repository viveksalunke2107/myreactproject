
import React from 'react'
import { Link } from 'react-router-dom'

const NavComp = () => {
    return (
        <div>
           {/* <h2>This is Nav Component</h2>  */}
           <Link to="myimages" className='btn btn-primary btn-sm'>MyImages</Link>{" "}
           <Link to="parent" className='btn btn-primary btn-sm'>Parent</Link>{" "}
           <Link to="mycss" className='btn btn-primary btn-sm'>myCss</Link>{" "}
           <Link to="hooks" className='btn btn-primary btn-sm'>ReactHooks</Link>{" "}
        </div>
    )
}

export default NavComp
