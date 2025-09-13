import React, { useRef } from 'react';
import './loginComp.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function LoginComp() {
    const nav = useNavigate();
    const uname = useRef();
    const upass = useRef();

    const checkData = () => {
        // uname.current.focus();
        // console.log(uname.current.value);
        // console.log(upass.current.value);
        let ucurrentid = uname.current.value;
        let ucurrentpass = upass.current.value;
        
        axios.get("http://localhost:9999/users").then((res) => {
            let userData = res.data;
            const data = userData.filter((val, index) => { return val.userid === ucurrentid && val.userpassword === ucurrentpass });
            
            if (data.length > 0) {
                window.alert("Login Successfully");
                sessionStorage.setItem("user", ucurrentid);
                nav("/maindashboard");

            } else {
                window.alert("wrong credentials inserted");
                uname.current.value = "";
                upass.current.value = "";
            }

        }).catch((error) => { })
    }

    return (
        <div className='loginMainDiv'>
            <form>
                <h2>Login Component</h2>
                <input type='text' name='txt1' ref={uname} placeholder='enter userid' /> <br /><br />
                <input type='text' name='txt2' ref={upass} placeholder='enter user password' /> <br /><br />
                <button type='button' onClick={checkData} className='btn btn-primary'>Login</button>
            </form>
        </div>
    )
}

export default LoginComp
