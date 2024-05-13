import './header.css'
import { Link } from 'react-router-dom'
export default function Header(){
    
    return <div className='header'>
        <div className='header-left'>Classroom</div>
        <div className='header-right'>
            <button className='login-button'><Link to='/signin'>Login</Link></button>
            <button className='signup-button' ><Link to='/signup'>Signup</Link></button>
        </div>
    </div>
}