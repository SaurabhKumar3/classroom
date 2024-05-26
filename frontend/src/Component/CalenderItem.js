import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import Datetime from 'react-datetime';
import 'react-calendar/dist/Calendar.css';
import 'react-datetime/css/react-datetime.css';
import axios from 'axios';
import './CalenderItem.css'
import { useContext } from 'react';
import { AuthContext } from './authContext';
export default function CalenderItem({ state }) {
  const {currentUser}=useContext(AuthContext);
  const [date, setDate] = useState(new Date());
  const [time, settime] = useState("10 am");
  const [slot, setslot] = useState('');
  const onChange = (selectedDate) => {
    setDate(selectedDate);
    setslot('')
  };
  function handleoptionchange(e) {
    settime(e.target.value);
    setslot('')
  }
  let teacher_booking_array = [];
  let bookingslot = date.toDateString() + time;
  let flag=false;
  const studentId=currentUser._id;
 
  function handleavailability() {
    teacher_booking_array.forEach(element => {
      if(element.bookedDate===bookingslot){
        setslot('red');
        flag=true;
      }
    })
    if(flag==false){
    setslot('green')
    }
  }

  function handlebookdemo() {
    const itemId=state._id;
    let student_booked_array=[];
    const studentId=currentUser._id;
    teacher_booking_array.push({username:currentUser.name,userid:studentId,bookingDate:bookingslot,status:"pending"});
    const teachername=state.name;
    student_booked_array.push({username:teachername,userid:itemId,bookingDate:bookingslot,status:'pending'});
    console.log(student_booked_array)
    try{
      const response=axios.put(`http://localhost:8000/api/teacher/bookingdate/${itemId}`,{bookedDate:teacher_booking_array});
      const response2=axios.put(`http://localhost:8000/api/student/bookingdate/${studentId}`,{bookedDate:student_booked_array});
      console.log(response2.data);
    }
    catch(error){
      console.log(error);
    }
  }
  return (
    <div className='calender-main'>
      <div className='calender-date'>
        <Calendar
          onChange={onChange}
          value={date}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className='calender-time-items'>
        Select Time
        <select value={time} onChange={handleoptionchange}>
          <option value={"10 am"}>10 am</option>
          <option value={"11 am"}>11 am</option>
          <option value={"12 pm"}>12 pm</option>
          <option value={"01 pm"}>01 pm</option>
          <option value={"02 pm"}>02 pm</option>
          <option value={"03 pm"}>03 pm</option>
          <option value={"04 pm"}>04 pm</option>
          <option value={"05 pm"}>05 pm</option>
          <option value={"06 pm"}>06 pm</option>
          <option value={"07 pm"}>07 pm</option>
        </select>
      </div>
      <div style={{ marginTop: '20px', fontSize: '18px' }}>
        Selected Date: {date.toDateString()} and Time:{time}
      </div>
      {slot == 'green' && <p style={{ color: "green" }}>Selected Slot is available</p>}
      {slot == 'red' && <p style={{ color: "red" }}>Selected slot is not available check diffrenct slot</p>}
      {slot != 'green' && <button className='avail-button' onClick={handleavailability}>Check for Availability</button>}
      {slot == 'green' && <button className='avail-button' onClick={handlebookdemo}>Book Demo</button>}

    </div>

  );
}