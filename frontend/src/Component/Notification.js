import './Notification.css'
import { useContext } from 'react'
import { AuthContext } from './authContext'
import axios from 'axios';
export default function TeacherNotification(){
    const {currentTeacher}=useContext(AuthContext);
    console.log(currentTeacher)
    let teacher_booking_array=[];
    const notification=currentTeacher.bookedDate[0];
    console.log("notification",notification)
    const bookingslot=notification.bookingDate;
    console.log("booking slot",bookingslot);
    function handleacceptbutton(){
    const teacherid=currentTeacher._id;
    let student_booked_array=[];
    const studentId=notification.userid;
    teacher_booking_array.push({username:notification.username,userid:studentId,bookingDate:bookingslot,status:"Scheduled"});
    const teachername=currentTeacher.name;
    student_booked_array.push({username:teachername,userid:teacherid,bookingDate:bookingslot,status:'Scheduled'});
    console.log(student_booked_array)
    try{
      const response=axios.put(`http://localhost:8000/api/teacher/bookingdate/${teacherid}`,{bookedDate:teacher_booking_array});
      const response2=axios.put(`http://localhost:8000/api/student/bookingdate/${studentId}`,{bookedDate:student_booked_array});
      console.log(response2.data);
    }
    catch(error){
      console.log(error);
    }
    }
return <div className="notice-main">
    <div className="notice-wrapper">
        <p>{notification.username} has requested for a demo class on {notification.bookingDate}</p>
        <button onClick={handleacceptbutton}>Accept</button>
        <button>Reject</button>
    </div>
</div>
}