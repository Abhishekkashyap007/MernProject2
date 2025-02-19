import React from 'react'
import { Link } from 'react-router-dom';
import { FaUserCheck } from "react-icons/fa";

function Mainpage() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 mt-3 text-center'>
                    <Link to="adminlogin" className='card border p-3 shadow'>
                        <h1><FaUserCheck></FaUserCheck></h1>
                        <h5>Admin Login</h5>
                    </Link>
                </div>
                <div className='col-md-4 mt-3 text-center'>
                    <Link to="studentlogin" className='card border p-3 shadow'>
                        <h1><FaUserCheck></FaUserCheck></h1>
                        <h5>Student Login</h5>
                    </Link>
                </div>  <div className='col-md-4 mt-3 text-center'>
                    <Link to="masterlogin" className='card border p-3 shadow'>
                        <h1><FaUserCheck></FaUserCheck></h1>
                        <h5>Master Login</h5>
                    </Link>
                </div>  <div className='col-md-4 mt-3 text-center'>
                    <Link to="teacherlogin" className='card border p-3 shadow'>
                        <h1><FaUserCheck></FaUserCheck></h1>
                        <h5>Teacher Login</h5>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Mainpage
