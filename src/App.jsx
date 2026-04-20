import React, { useEffect } from "react";
import Login from './component/Auth/Login'
import EmployeeDashboard from './component/Dashboard/EmployeeDashboard'
import AdminDashboard from './component/Dashboard/AdminDashboard'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from './context/AuthProvider'
import AllTask from './others/AllTask'
import EmployeesDetails from './component/Employee/EmployeesDetails'
import axios from 'axios'

const App = () => {
  const [user,setUser]=useState(null);
  const [LoggedInUser,setLoggedInUser]=useState(null);
  const [details,setDetails]=useState(null);
  const [Profile,setProfile]=useState(null);
  const [ProfileDetail,setProfileDetail]=useState();

  let AuthData=useContext(AuthContext);
/*   AuthData=AuthData.userdata;
  AuthData.employees={...AuthData.employees}
  AuthData.admin={...AuthData.admin}
  console.log(AuthData) */


/* const [loading, setLoading] = useState(true); */

/* useEffect(() => {
  const fetchLogin = async () => {
    const response = await axios.get("http://localhost:3000/loggeduser");

    if (response.data.length > 0) {
      setUser(response.data[0].role);
    }

    setLoading(false);
  };

  fetchLogin();
}, []); */

useEffect(() => {
  const fun = async () => {
    const response = await axios.get(
      "https://employees-management-system-backend.vercel.app/loggeduser"
    );

    if (response.data.length > 0) {
      const LoggedInUser = response.data[0];

      setUser(LoggedInUser.role);
      setLoggedInUser(LoggedInUser.data);
    }
  };

  fun();
}, []);


  const postAdmin = async () => {
    setUser("admin");
    await axios.delete("https://employees-management-system-backend.vercel.app/loggeduser");
    await axios.post("https://employees-management-system-backend.vercel.app/loggeduser", {
      role: "admin",
      data: AuthData.userdata.admin
    });
  };


  const postEmployee = async (data) => {
    setUser("employee");
    await axios.delete("https://employees-management-system-backend.vercel.app/loggeduser");
    await axios.post("https://employees-management-system-backend.vercel.app/loggeduser", {
      role: "employee",
      data: data
    });
  };


function LoginHandler(email, password) {
  const admin = Object.values(AuthData?.userdata?.admin || {}).find(
    (a) => email == a.email && password == a.password
  );

  if (admin) {
    postAdmin();
    setLoggedInUser(admin);
    return;
  }

  const employee = Object.values(AuthData?.userdata?.employees || {}).find(
    (e) => email == e.email && password == e.password
  );

  if (employee) {
    postEmployee(employee);
    setLoggedInUser(employee);
    return;
  }

  alert("Invalid credentials");
}
     
/* useEffect(() => {
   const data = localStorage.getItem("employees");

   if (!data) {
      SetLocalStorage();
   }

   getLocalStorage();
}, []); */

  return (
    <>  
    {!user ? <Login LoginHandler={LoginHandler}/> : ''}
    {user==("admin") && details==null ? <AdminDashboard data={{LoggedInUser,setDetails,setUser}}/> : ''}
    {user=="employee" ? <EmployeeDashboard data={{LoggedInUser,setUser}}/> : null}
    {details=="alltasks" && Profile==null ? <AllTask setProfile={{setProfile,setProfileDetail}}/> : ''}
    {Profile != null ? <EmployeesDetails data={{ProfileDetail,setDetails,setProfile}}/> : ''}  
    </>
  )
}

export default App
