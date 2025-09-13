import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom'

const ProtectedRoutingComp = ({Component})=>{

    const nav = useNavigate();

    useEffect(()=>{
        if(!sessionStorage.getItem("user")){
            nav("/login");
        }
    },[]);

    return (<>
      { !!sessionStorage.getItem("user") &&  <Component></Component>}
    </>)
};

export default ProtectedRoutingComp;
