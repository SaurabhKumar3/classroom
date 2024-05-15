import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import TeacherDashboard from './Pages/TeacherDashboard';
import StudentDashboard from './Pages/StudentDashboard';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import TeacherCard from './Component/TeacherCard';
import TeacherList from './Pages/TeacherList';
import Signin from './Pages/Signin';
import { useContext} from 'react';
import { AuthContext } from './Component/authContext';
import BookDemoClass from './Pages/BookDemoClass';
import Classroom from './Pages/Classroom';

function App() {
  const {currentUser,currentTeacher}=useContext(AuthContext);
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/teacherlist' element={<TeacherList/>}/>
      {currentUser?(<Route path='/student' element={<StudentDashboard/>}/>):(<Route path='/signin' element={<Signin/>}/>)}
      
     {currentTeacher?(<Route path='/teacher' element={<TeacherDashboard/>}/>):(<Route path='/signin' element={<Signin/>}/>)}
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/democlass' element={<BookDemoClass/>}/>
      <Route path='/classroom' element={<Classroom/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
