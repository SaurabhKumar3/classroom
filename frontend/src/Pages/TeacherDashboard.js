import '../App.css'
import Header from '../Component/Header'
import { useLocation } from 'react-router-dom'
import { useContext} from 'react';
import { AuthContext } from '../Component/authContext';
import myimage from '../Saurabh.jpg'
export default function TeacherDashboard(){
    const {currentTeacher}=useContext(AuthContext);
    return <div>
            <Header/>
            <div className='main'>
            <h1>Teacher Dashboard</h1>
            <div className='main-wrapper'>
            <div className='left-item'>
            <img src={myimage} style={{width:'150px', height:'150px'}}/>
            </div>
            <div className='right-item'>
            <h2>{currentTeacher.name}</h2>
            <h3>About</h3>
            <p>Hi Welcome to my profile.I have 5+ Years of experience in Teaching</p>
            <h3>Earned Coins</h3>
            <p>40</p>
            <h3>Recieved Feedback</h3>
            {currentTeacher.feedback.map((feedbackitems,index)=>(
                <div className="feedbackitem" key={index}>
                <span>{feedbackitems.username}</span><span>Rated {feedbackitems.rating} Star</span>
                <p>{feedbackitems.message}</p>
            </div>
            ))}
            </div>
            </div>
        </div>
        </div>
}