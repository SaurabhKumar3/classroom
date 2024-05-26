import Header from "./Header";
import myimage from '../Saurabh.jpg'
import './TeacherCard.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
export default function TeacherCard({teacher}){
    const navigate=useNavigate();
    function handledemoclick(){
        navigate('/democlass',{state:teacher});
    }

    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        if (teacher && teacher.profilePhoto && teacher.profilePhoto.filename) {
            try {
                const imagePath = require(`../uploads/${teacher.profilePhoto.filename}`);
                setImageSrc(imagePath);
            } catch (error) {
                setImageSrc(myimage);
            }
        } else {
            setImageSrc(myimage);
        }
    }, [teacher]);

    function handleImageError() {
        setImageSrc(myimage);
    }

    return <div>
        <div className="teachercard-main">
        <div className="teachercard-wraper">
            <div className="teachercard-left">
            <img
                            id="teachercard-image"
                            src={imageSrc}
                            onError={handleImageError}
                            alt="Teacher"
                        />

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