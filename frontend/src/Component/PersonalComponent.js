import './PersonalComponent.css'
import { useNavigate } from "react-router-dom";
export default function PersonalComponent(){
    const navigate=useNavigate()
    function handleclassroom(){
        navigate('/classroom');
    }
    function handlelogout(){
        
    }
    return <div className="personal-main">
    <ul>
    <li onClick={handleclassroom}>Classroom</li>
    <li onClick={handlelogout}>Logout</li>
    </ul>
    </div>
}