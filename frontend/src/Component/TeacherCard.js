import Header from "./Header";
import myimage from '../Saurabh.jpg'
import './TeacherCard.css'
export default function TeacherCard(){
    return <div>
        <div className="teachercard-main">
        <div className="teachercard-wraper">
            <div className="teachercard-left">
            <img id="teachercard-image"src={myimage}/>
            <p>Rating:4.5</p>
            </div>
            <div className="teachercard-right">
            <p>Saurabh Kumar Sahani</p>
            <p>Education:BTech</p>
            <p>Experience:4+Years</p>
            <p>Subject:Math</p>
            </div>
        </div>
        <button id="requestdemo-button">Request for Demo</button>
        </div>
        
        </div>
}