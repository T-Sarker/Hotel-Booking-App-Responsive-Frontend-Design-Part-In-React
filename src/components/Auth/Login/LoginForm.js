import React from 'react'
import './login.css'

const LoginForm = () => {
    return (
        <>
            <div className="LoginWraper my-4">
                <div className="container h-">
                    <div className="loginForm w-25">
                        <h4 className='my-4'>Login</h4>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="email1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email1" />
                            </div>


                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm