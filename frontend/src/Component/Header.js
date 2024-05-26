import './header.css'
import { Form, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faBell } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState} from 'react';
import { AuthContext } from './authContext';
import PersonalComponent from './PersonalComponent';
import TeacherNotification from './Notification';
import {useNavigate} from 'react-router-dom';
import Studentheader from './Studentheader';
import Teachertheader from './Teacherheader';

export default function Header(){
    const navigate=useNavigate();
    const {currentUser,currentTeacher}=useContext(AuthContext);
    const [showvertical,setshowvertical]=useState(false);
    const [shownotification,setshownotification]=useState(false);
    function handleuserclick(){
        setshowvertical(!showvertical);
    }
    function handlebellclick(){
        setshownotification(!shownotification)
    }
    return <div className='header'>
        <div className='header-left'>Classroom</div>
        <div className='header-right'>
        {currentUser&&<Studentheader/>}
        {currentTeacher&&<Teachertheader/>}
           {(!currentUser&&!currentTeacher)&& <div>
            <button className='login-button'><Link to='/signin'>Login</Link></button>
            <button className='signup-button' ><Link to='/signup'>Signup</Link></button>
            </div>}
        
        
        {showvertical&&<PersonalComponent/>}
        </div>
    </div>
}