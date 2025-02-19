import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Mainpage from './modules/Mainpage';
import Student_login from './modules/students/auth/Student_login';
import Admin_login from './modules/admin/auth/Admin_login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Mainpage/>}></Route>
      <Route path='studentlogin' element={<Student_login/>}></Route>
      <Route path='adminlogin' element={<Admin_login/>}></Route>
    </Routes>
    </BrowserRouter>
  
  </React.StrictMode>
);


reportWebVitals();
