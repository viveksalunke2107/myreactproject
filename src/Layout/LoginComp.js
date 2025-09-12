import React ,{useRef}from 'react'


function LoginComp() {
    
    const uname=useRef();
    const upass=useRef();

    const checkData = ()=>{
        uname.current.focus();
        upass.current.focus();
        // console.log(uname.current.value);
        // console.log(upass.current.value);
    }

    return (
        <div>
            <h2>Login Component</h2>
            <input type='text' name='txt1' ref={uname} placeholder='enter userid'/> <br/><br/>
            <input type='text' name='txt2' ref={upass} placeholder='enter user password' /> <br/><br/>
            <button type='button' onClick={checkData} className='btn btn-primary'>Login</button>
        </div>
    )
}

export default LoginComp
