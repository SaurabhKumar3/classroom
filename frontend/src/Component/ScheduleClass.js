import { useState } from 'react';
import Calendar from 'react-calendar';
import Datetime from 'react-datetime';
import 'react-calendar/dist/Calendar.css';
import 'react-datetime/css/react-datetime.css';



export default function ScheduleClass(){
    const [date, setDate] = useState(new Date());
    const [time,settime]=useState("10 am");
    const onChange = (selectedDate) => {
        setDate(selectedDate);
      };
      console.log(date)
      function handlechange(e){
        settime(e.target.value);
      }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Calendar Example</h1>
      <div style={{ width: '300px', height: '300px' }}>
        <Calendar
          onChange={onChange}
          value={date}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className='calender-time-items'>
        <select value={time} onChange={handlechange}>
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
    </div>

  );
}