import { useState } from 'react';
import Calendar from 'react-calendar';
import Datetime from 'react-datetime';
import 'react-calendar/dist/Calendar.css';
import 'react-datetime/css/react-datetime.css';
import axios from 'axios';
import './CalenderItem.css'

export default function CalenderItem({ state }) {
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
  let booking_array = state.bookedDate;
  let bookingslot = date.toDateString() + time;
  let flag=false;
  function handleavailability() {
    booking_array.forEach(element => {
      console.log("element",element)
      console.log('bookingslot',bookingslot)
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
    booking_array.push({bookedDate:bookingslot,user:'user',status:"pending"});
    try{
      const response=axios.put(`http://localhost:8000/api/teacher/${itemId}`,{bookedDate:booking_array});
      console.log(response.data);
    }
    catch(error){
      console.log(error);
    }
  }
console.log(booking_array)
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