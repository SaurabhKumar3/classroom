import { useState } from "react"
import '../App.css'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
export default function Signup(){
    const navigate=useNavigate();
    const [selectedoption, setselectedoption]=useState('student');
    const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [usertype,setusertype]=useState('');
    function handlechange(e){
        setselectedoption(e.target.value);
    }
    function handlenamechange(e){
        setname(e.target.value);
    }
    function handleemailchange(e){
        setemail(e.target.value);
    }
    function handlepasswordchange(e){
        setpassword(e.target.value);
    }
    
    async function handlesubmit(){
        if(selectedoption==="student"){
            console.log("student");
            try{
               await axios.post('http://localhost:8000/signup',{name,email,password})
               navigate('/signin')
            }
            catch(error){
                console.log(error);
            }
        }
        if(selectedoption==="teacher"){
            console.log("teacher");
            try{
               await axios.post('http://localhost:8000/teacher/signup',{name,email,password})
               navigate('/teacher/signin');
            }
            catch(error){
                console.log(error);
            }
        }
    }
    return <div className="signup-main">
        Join as a Teacher or Student
        <div className="radio-element">
        <div>
        <label>Student<input type="radio" value="student" onChange={handlechange} checked={selectedoption==='student'}/></label>
        </div>
        <div>
        <label>Teacher<input type="radio" value="teacher" onChange={handlechange} checked={selectedoption==='teacher'}/></label>
        </div>
        </div>
        <div className="form-element">
            <input className="email" type="text" value={name} placeholder="Enter your Name" onChange={handlenamechange}/>
            <input className="email" type="email" value={email} placeholder="Enter your Email" onChange={handleemailchange}/>
            <input className="password" type="password" value={password} placeholder="Enter your Password" onChange={handlepasswordchange}/>
        </div>
        <button className="signup-submit" onClick={handlesubmit}type="submit">Signup</button>
        <p>Already Have account? <Link to='/signin'>Login</Link></p>
    </div>
}