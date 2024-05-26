import CalenderItem from "../Component/CalenderItem";
import '../App.css'
import Header from '../Component/Header'
import { useLocation } from 'react-router-dom'

import myimage from '../Saurabh.jpg'
export default function BookDemoClass(){
    const location=useLocation();
    const {state}=location;
    const feedback=state.feedback;
    return <div>
            <Header/>
            <div className='main'>
            <div className='main-wrapper'>
            <div className='left-item'>
            <img src={myimage} style={{width:'150px', height:'150px'}}/>
            <p>Total Rating:{state.Rating} Star</p>
            <CalenderItem state={state}/>
            </div>
            <div className='right-item'>
            <h2>{state.name}</h2>
            <h3>About</h3>
            <p>Hi Welcome to my profile.I have 5+ Years of experience in Teaching</p>
            <h3>Education</h3>
            <p>{state.education}</p>
            <h3>Earned Coins</h3>
            <p>{state.earnedcoins}</p>
            <h3>Recieved Feedback</h3>
            {feedback.map((feedbackitems,index)=>(
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