import './Notification.css'
import { useContext } from 'react'
import { AuthContext } from './authContext'
import axios from 'axios';
export default function StudentNotification(){
    const {currentUser}=useContext(AuthContext);
    
return <div className="notice-main">
    <div className="notice-wrapper">
        <p>Teacher has accepted your demo class request </p>
    </div>
</div>
}