import ScheduleClass from "../Component/ScheduleClass";
import '../App.css'
import Header from '../Component/Header'
import { useLocation } from 'react-router-dom'

import myimage from '../Saurabh.jpg'
export default function BookDemoClass(){
    return <div>
            <Header/>
            <div className='main'>
            <h1>Teacher Dashboard</h1>
            <div className='main-wrapper'>
            <div className='left-item'>
            <img src={myimage} style={{width:'150px', height:'150px'}}/>
            <ScheduleClass/>
            </div>
            <div className='right-item'>
            <h2>Saurabh Kumar Sahani</h2>
            <h2>About</h2>
            <p>Hi Welcome to my profile.I have 5+ Years of experience in Teaching</p>
            <h2>Earned Coins</h2>
            <p>40</p>
            <h2>Recieved Feedback</h2>
            </div>
            </div>
        </div>
        </div>
}