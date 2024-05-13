import React, { useContext, useState} from "react"
import '../App.css'
import { Link } from "react-router-dom";
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import {AuthContext} from '../Component/authContext'
export default function Signin({isloggedin,setisloggedin}){
    const {login}=useContext(AuthContext)
    const navigate = useNavigate();
    const [selectedoption, setselectedoption]=useState('student');
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [usertype,setusertype]=useState('');
    function handlechange(e){
        setselectedoption(e.target.value);
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
                const response=await login(email,password);
                console.log(response);
                navigate('/student')
       
            }
            catch(error){
                console.log(error);
            }
        }
        if(selectedoption==="teacher"){
            console.log("/teacher");
            try{
                await axios.post('http://localhost:8000/teacher/signin',{email,password})
                navigate('/teacher')
            }
            catch(error){
                console.log(error);
            }
        }
    }
    return <div className="signup-main">
        Login as a Teacher or Student
        <div className="radio-element">
        <div>
        <label>Student<input type="radio" value="student" onChange={handlechange} checked={selectedoption==='student'}/></label>
        </div>
        <div>
        <label>Teacher<input type="radio" value="teacher" onChange={handlechange} checked={selectedoption==='teacher'}/></label>
        </div>
        </div>
        <div className="form-element">
            <input className="email" type="email" value={email} placeholder="Enter your Email" onChange={handleemailchange}/>
            <input className="password" type="password" value={password} placeholder="Enter your Password" onChange={handlepasswordchange}/>
        </div>
        <button className="signup-submit" onClick={handlesubmit}type="submit">Signin</button>
        <p>Don't Have account <Link to='/signup'>Signup</Link></p>
    </div>
}