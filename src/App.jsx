import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import AdminDashboard from './components/Admin/AdminDashboard';
import EmployeeDashboard from './components/Employee/EmployeeDashboard';
import ManagerDashboard from './components/Manager/ManagerDashboard';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  const userRole = localStorage.getItem('role');
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/employee" element={<EmployeeDashboard/>}/>
        <Route path="/manager" element={<ManagerDashboard/>}/>
        <Route path="/" element={
          userRole === 'admin' ? <Navigate to="/admin"/>
          : userRole === 'manager' ? <Navigate to="/manager"/>
          : userRole === 'employee' ? <Navigate to="/employee"/>
          : <Navigate to="/login"/>
        }/>
      </Routes>
    </Router>
  );
}
export default App;
