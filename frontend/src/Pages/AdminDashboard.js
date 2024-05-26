import { useEffect, useState } from "react"
import axios from "axios";
import Header from "../Component/Header";
import { Link } from "react-router-dom";
import '../Component/AdminDashboard.css'
export default function AdminDashboard(){
    const [teachers,setteachers]=useState([]);
    const [students,setstudents]=useState([]);
    useEffect(()=>{
        fetchstudents();
        fetchteachers();
    })
    function fetchstudents(){
        axios.get('http://localhost:8000/all/students')
        .then(response=>{
            setstudents(response.data);
        })
        .catch((error)=>{
            console.log(error)
        })
        
    }
    function fetchteachers(){
        axios.get('http://localhost:8000/all/teachers')
        .then(response=>{
            setteachers(response.data);
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    const deleteteacher=(teacherid)=>{
        try{
            axios.delete(`http://localhost:8000/delete/teacher/${teacherid}`);
            fetchteachers();
        }
        catch(error){
            console.log(error);
        }
    }
    const deletestudent=(studentid)=>{
        try{
            axios.delete(`http://localhost:8000/delete/student/${studentid}`);
            fetchstudents();
        }
        catch(error){
            console.log(error);
        }
    }
    return <div>
        <Header/>
        <div className="dashboard-main">
            <h1>Admin Dashboard</h1>
        <div className="teacherslist">
            <h2>All Teachers</h2>
            {teachers.map((teacher)=>(
                <div className="itemcard">
                <span>{teacher.name}</span>
                <span>{teacher.email}</span>
                <span><Link to="#">View Profile</Link></span>
                <span><button onClick={()=>deleteteacher(teacher._id)}>Delete Profile</button></span>
                </div>
            ))}
        </div>
        <div className="studentslist">
            <h2>All Students</h2>
            {students.map((student)=>(
                <div className="itemcard">
                <span>{student.name}</span>
                <span>{student.email}</span>
                <span><Link to="#">View Profile</Link></span>
                <span><button onClick={()=>deletestudent(student._id)}>Delete Profile</button></span>
                </div>
                ))}
        </div>
        </div>
    </div>
}