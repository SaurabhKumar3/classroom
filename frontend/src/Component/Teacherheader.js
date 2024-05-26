import './header.css'
import { Form, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faBell } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState} from 'react';
import { AuthContext } from './authContext';
import PersonalComponent from './PersonalComponent';
import TeacherNotification from './Notification';
import {useNavigate} from 'react-router-dom';

export default function Teachertheader(){
    const navigate=useNavigate();
    const {currentTeacher}=useContext(AuthContext);
    const [showvertical,setshowvertical]=useState(false);
    const [shownotification,setshownotification]=useState(false);
    function handleuserclick(){
        setshowvertical(!showvertical);
    }
    function handlebellclick(){
        setshownotification(!shownotification)
    }
    return <div className='noticeanduser'>
    <div onClick={handlebellclick} className='bellicon'><FontAwesomeIcon icon={faBell} /></div>
    {shownotification&&<TeacherNotification/>}
    <FontAwesomeIcon onClick={handleuserclick} icon={faUser} />{currentTeacher.name}
    </div>
}