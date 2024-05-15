import myimage from '../Saurabh.jpg'
import '../App.css'
import Header from '../Component/Header'
import { useAuth } from '../Component/authContext'
import { useLocation } from 'react-router-dom'
import { useContext} from 'react';
import { AuthContext } from '../Component/authContext';
export default function StudentDashboard(){
    const {currentUser}=useContext(AuthContext);
    return <div className='main'>
        <Header/>
        <h1>Student Dashboard</h1>
        <div className='main-wrapper'>
        <div className='left-item'>
        <img src={myimage} style={{width:'150px', height:'150px'}}/>
        </div>
        <div className='right-item'>
        <h2>{currentUser.name}</h2>
        <h2>Subjects</h2>
        <ul>
            <li>Match</li>
            <li>Phhysics</li>
            <li>Chemistry</li>
            <li>English</li>
        </ul>
        </div>
        </div>
        </div>
}