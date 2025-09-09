import {useState} from 'react';

const FormValidationComp = ()=>{
    const subjects = ["React","Java","Python","C++","Mysql","Angular"];
    const [user,setUser] = useState({
        fname:"",
        lname:"",
        course:"",
        term:false
        // age:""
    });

    const inputChangeHandler = (event)=>{
        // console.log(event.target.type);
        // console.log(event.target.name);
        // console.log(event.target.value);
        const {type,name,value ,checked} = event.target;
        setUser({...user,[name]:type=="checkbox"? true :value});
    }
    const checkData = (event)=>{

        event.preventDefault();
       if(user.fname.trim()===""){
        window.alert("First name is required");
        return false;
       }
       if(!user.fname.trim().match('^[a-z,A-Z]{2,20}$')){
        window.alert("First name must contain only character min-2 and max-20");
        return false;
       }
       if(user.lname.trim()===""){
        window.alert("Last name is required");
        return false;
       }
       if(!user.lname.trim().match('^[a-zA-Z]{2,20}$')){
        window.alert("Last name must contain only character min-2 and max-20");
        return false;
       }
       if(user.course==""){
        window.alert("course filed is required");
        return false;
       }
       if(!user.term){
        window.alert("accept term and condition");
        return false;
       }
       window.alert(JSON.stringify(user));
    }

   
    return <>
        <h2>This is Form validation</h2>
        <form onSubmit={checkData}>
            <input type="text" name="fname" onChange={inputChangeHandler}  value={user.fname} placeholder='enter user first name' /><br/><br/>
            <input type="text" name="lname" onChange={inputChangeHandler}  value={user.lname} placeholder='enter user last name' /><br/><br/>
            {/* <input type="number" name="age" onChange={inputChangeHandler}  value={user.age} placeholder='enter user age' /><br/><br/> */}

            <label>Select Your Course:</label>
            <select name="course" onChange={inputChangeHandler}>
               <option></option> 
               {
                subjects.map((val,index)=>{
                    return <option value={val} key={index}>{val}</option>
                })
               }
            </select> <br/><br/>

            <input type='checkbox' name='term' onChange={inputChangeHandler}  /> <label> I Accept Term and Condition</label>
            <br/><br/>

            <button type='submit' className='btn btn-primary mt-2'>submit</button>
        </form>
    </>
}
export default FormValidationComp;
