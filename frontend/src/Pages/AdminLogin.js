import { useNavigate } from "react-router-dom";
import React, { useContext, useState} from "react"

import '../App.css'
import { Link } from "react-router-dom";
import axios from 'axios';
import {AuthContext} from '../Component/authContext'
import Header from "../Component/Header";
export default function AdminLogin(){
    const {adminlogin}=useContext(AuthContext)
    const navigate = useNavigate();
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');

    function handleemailchange(e){
        setemail(e.target.value);
    }
    function handlepasswordchange(e){
        setpassword(e.target.value);
    }
    
    async function handlesubmit(){
            try{
                const response=await adminlogin(email,password);
                console.log(response);
                if(response){
                navigate('/admin',{state:response.data})
                }
            }
            catch(error){
                console.log(error);
            }       
    }
    return <div>
        <Header/>
        <div className="signup-main">
        <h2>Login as Admin</h2>
            <div className="form-element">
            <input className="input-field" type="email" value={email} placeholder="Enter your Email" onChange={handleemailchange}/>
            <input className="input-field" type="password" value={password} placeholder="Enter your Password" onChange={handlepasswordchange}/>
        </div>
        <button className="signup-submit" onClick={handlesubmit}type="submit">Signin</button>
    </div>
    </div>
}