
import React from 'react';
import { Outlet } from 'react-router-dom';


const ReactHooksComp = () => {
    return (
        <div>
            {/* <h2>This is react Hooks Component</h2> */}
            <div className='card border-danger' >
                <div className='card-header border-danger '></div>
            </div>
            <Outlet/>
        </div>
    )
}

export default ReactHooksComp
