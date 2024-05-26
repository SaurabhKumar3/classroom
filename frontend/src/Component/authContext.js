import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [currentTeacher,setcurrentTeacher]=useState(
    JSON.parse(localStorage.getItem("teacher")) || null
  )
  const [currentAdmin,setCurrentAdmin]=useState(
    JSON.parse(localStorage.getItem("admin")) || null
  )

  const login = async (email,password) => {
    const res=await axios.post('http://localhost:8000/signin',{email,password})
    setCurrentUser(res.data)
    return res.data;
  };
  const teacherlogin = async (email,password) => {
    const res=await axios.post('http://localhost:8000/teacher/signin',{email,password})
    setcurrentTeacher(res.data)
    return res.data;
  };
  const adminlogin = async (email,password) => {
    const res=await axios.post('http://localhost:8000/admin/signin',{email,password})
    setCurrentAdmin(res.data)
    return res.data;
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
    localStorage.setItem("teacher", JSON.stringify(currentTeacher));
    localStorage.setItem("admin", JSON.stringify(currentAdmin));
  }, [currentUser,currentTeacher,currentAdmin]);

  return (
    <AuthContext.Provider value={{ currentUser, login,currentTeacher,teacherlogin,adminlogin,currentAdmin}}>
      {children}
    </AuthContext.Provider>
  );
};
