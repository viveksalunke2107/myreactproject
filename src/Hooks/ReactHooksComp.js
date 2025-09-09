
import React from 'react';
import { Outlet,Link } from 'react-router-dom';


const ReactHooksComp = () => {
    return (
    <div className="container">
      <h2>This is ReactHooks</h2>
      <div className="card border-primary">
        <div className="card-header border-primary">
         <Link to="usestate" className='btn btn-danger btn-sm'>usestate</Link>{" "}
         <Link to="useeffect" className='btn btn-danger btn-sm'>useeffect</Link>{" "}
          
        </div>
        <div className="card-body border-primary">
          <Outlet />
        </div>
        <div className="card-footer border-primary">
          <strong>This is my personal card.<br/>Follow my link :<br/></strong>
        </div>
      </div>
    </div>
  );
};

export default ReactHooksComp
