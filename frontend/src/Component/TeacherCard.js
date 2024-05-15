import Header from "./Header";
import myimage from '../Saurabh.jpg'
import './TeacherCard.css'
import { useNavigate } from "react-router-dom";
export default function TeacherCard({teacher}){
    const navigate=useNavigate();
    function handledemoclick(){
        navigate('/democlass',{state:teacher});
    }
    return <div>
        <div className="teachercard-main">
        <div className="teachercard-wraper">
            <div className="teachercard-left">
            <img id="teachercard-image"src={myimage}/>
            <p>Rating:{teacher.Rating}</p>
            </div>
            <div className="teachercard-right">
            <p>{teacher.name}</p>
            <p>Education:{teacher.education}</p>
            <p>Experience:{teacher.experience}+Years</p>
            <p>Subject:{teacher.subject[0]}</p>
            </div>
        </div>
        <button id="requestdemo-button" onClick={handledemoclick}>Request for Demo</button>
        </div>
        
        </div>
}