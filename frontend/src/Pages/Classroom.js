
import myimage from '../Saurabh.jpg';
import '../Component/classroom.css'
import Header from '../Component/Header';
export default function Classroom(){
    return <div>
        <Header/>
        <div className="classroom-main">
        <div className="classroom-left">
            <h3>Teacher Name</h3>
            <p>Saurabh</p>
            <p>Date:</p>
        </div>
        <div className="classroom-right">
            Share you content here
        </div>
        </div>
    </div>
}