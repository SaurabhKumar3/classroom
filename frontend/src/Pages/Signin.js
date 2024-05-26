import React, { useContext, useState} from "react"
import '../App.css'
import { Link } from "react-router-dom";
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import {AuthContext} from '../Component/authContext'
import Header from "../Component/Header";
export default function Signin(){
    const {login,teacherlogin}=useContext(AuthContext)
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
            try{
                const response=await login(email,password);
                console.log(response);
                if(response){
                navigate('/student',{state:response.data})
                }
            }
            catch(error){
                console.log(error);
            }
        }
        if(selectedoption==="teacher"){
            try{
                const response=await teacherlogin(email,password);
                navigate('/teacher',{state:response.data})
            }
            catch(error){
                console.log(error);
            }
        }
    }
    return <div>
        <Header/>
        <div className="signup-main">
        <h2>Login as a Teacher or Student</h2>
        <div className="radio-element">
        <div>
        <label>Student<input type="radio" value="student" onChange={handlechange} checked={selectedoption==='student'}/></label>
        </div>
        <div>
        <label>Teacher<input type="radio" value="teacher" onChange={handlechange} checked={selectedoption==='teacher'}/></label>
        </div>
        </div>
        <div className="form-element">
            <input className="input-field" type="email" value={email} placeholder="Enter your Email" onChange={handleemailchange}/>
            <input className="input-field" type="password" value={password} placeholder="Enter your Password" onChange={handlepasswordchange}/>
        </div>
        <button className="signup-submit" onClick={handlesubmit}type="submit">Signin</button>
        <p>Don't Have account <Link to='/signup'>Signup</Link></p>
    </div>
    </div>
}