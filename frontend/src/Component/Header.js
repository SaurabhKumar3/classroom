import './header.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState} from 'react';
import { AuthContext } from './authContext';
import PersonalComponent from './PersonalComponent';
export default function Header(){
    const {currentUser,currentTeacher}=useContext(AuthContext);
    const [showvertical,setshowvertical]=useState(false);
    function handleuserclick(){
        setshowvertical(!showvertical);
    }
    return <div className='header'>
        <div className='header-left'>Classroom</div>
        <div className='header-right' onClick={handleuserclick}>
        {(currentUser)?
        <div><FontAwesomeIcon icon={faUser} />{currentUser.name}</div>:<div>
            <button className='login-button'><Link to='/signin'>Login</Link></button>
            <button className='signup-button' ><Link to='/signup'>Signup</Link></button>
            </div>}
        {showvertical&&<PersonalComponent/>}
        </div>
    </div>
}