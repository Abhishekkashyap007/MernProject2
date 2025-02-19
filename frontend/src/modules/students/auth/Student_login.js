import React from 'react'

function Student_login() {
    return (
        <div className='container'>
            <div className='row border shadow'>
                <div className='col-md-6 g-0'>
                    <div className='p-3 text-center'>
                        <h4>Student Login Portal</h4>
                    </div>
                </div>
                <div className='col-md-6 bg-light g-0'>
                    <div className='p-5 bg-white'>
                        <h4 className='text-center'>Student Login Portal</h4>
                        <form className='p-5'>
                        <div className='bg-white'>
                            <div className="p-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" />
                            </div>
                        </div>
                        <div className='bg-white'>
                            <div className="p-3">
                                <label className="form-label">Password</label>
                                <input type="email" className="form-control" />
                            </div>
                        </div>
                        <div className='bg-white'>
                            <div className="p-3">
                                <button className='btn btn-success'>Login</button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Student_login
