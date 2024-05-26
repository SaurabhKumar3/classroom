import './header.css'
import { Form, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faBell } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState} from 'react';
import { AuthContext } from './authContext';
import PersonalComponent from './PersonalComponent';
import TeacherNotification from './Notification';
import {useNavigate} from 'react-router-dom';
import StudentNotification from './StudentNotification';

export default function Studentheader(){
    const navigate=useNavigate();
    const {currentUser}=useContext(AuthContext);
    const [showvertical,setshowvertical]=useState(false);
    const [shownotification,setshownotification]=useState(false);
    function handleuserclick(){
        setshowvertical(!showvertical);
    }
    function handlebellclick(){
        setshownotification(!shownotification)
    }
    return <div className='noticeanduser'>
    <div className='allteacher'><Link to={'/teacherlist'} style={{ textDecoration: 'none', color: 'inherit' }}>All Teachers</Link></div>
    <div onClick={handlebellclick} className='bellicon'><FontAwesomeIcon icon={faBell} /></div>
    {shownotification&&<StudentNotification/>}
    <FontAwesomeIcon onClick={handleuserclick} icon={faUser} />{currentUser.name}
    </div>
}