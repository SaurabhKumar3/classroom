import TeacherCard from "../Component/TeacherCard";
import Header from "../Component/Header";
import { useEffect, useState } from "react";
import axios from "axios";
export default function TeacherList(){
    const [teacherdata,setteacherdata]=useState([]);
    useEffect(()=>{
        axios('http://localhost:8000/all/teachers')
        .then((response)=>{
            setteacherdata(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    return <div >
        <Header/>
        <div className="teacherlist-main">
        <h2>Available Teachers</h2>
        {teacherdata.map((teacher)=>(
        <div className="teacher-card-wrapper" key={teacher._id}>
        <TeacherCard teacher={teacher} />
    </div>
        ))}
        </div>
    </div>
}