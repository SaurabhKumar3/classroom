
import myimage from '../Saurabh.jpg';
import '../Component/classroom.css'
import Header from '../Component/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../Component/authContext';
import Chat from '../Component/Chat';
export default function Classroom(){
    const {currentUser}=useContext(AuthContext);
    const [schedule,setschedule]=useState(null);

    const studentId=currentUser._id
    console.log("classroom",schedule)
    useEffect(()=>{
          axios.get(`http://localhost:8000/api/student/${studentId}`)
          .then(response=>{
            console.log("classroom response",response.data);
            setschedule(response.data.bookedDate[0]);
          })
          .catch((error)=>{
            console.log(error);
          })
      },[])  
    return <div>
        <Header/>
        {schedule&&<div className="classroom-main">
        <div className="classroom-left">
            <h3>Teacher Name:{schedule.username}</h3>
            <p>Date:{schedule.bookingDate.substr(0,15)}</p>
            <p>Time:{schedule.bookingDate.substr(15,15)}</p>
            <p>Status:<span style={{color: schedule.status === 'Scheduled' ? 'green' : 'yellow'}}>{schedule.status}</span></p>
        </div>
        <div className="classroom-right">
            Share you content here
            <Chat/>
        </div>
        </div>}
        {!schedule&&<div>No classes available</div>}
    </div>
}