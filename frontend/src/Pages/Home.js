import Header from "../Component/Header";
import '../App.css'
import kidlearning from '../kids-learning.jpg'
import { Link } from "react-router-dom";
export default function Home(){
    return <div>
        <Header/>
        <div className="home-main">
            <div className="home-wrapper">
                <div className="content">
                <p id="firstpara">Kids Learning Center</p>
                <p id="secondpara">New Approach to Kids Education</p>
                <p id="thirdpara">virtual classrooms connect students worldwide, promoting cultural awareness and collaboration. Parents appreciate the flexibility and safety of online platforms, allowing personalized schedules and monitored progress. As technology evolves, online education continues to evolve, empowering children with essential skills for the digital age.</p>
           <button>Signup</button>
            </div>
            <div className="kidimage">
                <img id="kidlearning" src={kidlearning}/>
            </div>
            </div>
        </div>
    </div>
}