import React from 'react'
import './Login.scss'
export default function Login() {
  return (
    <>
       <div className="container-fluid py-5" id='login-cf'>
        <div className="container">
            <div className="col-8 mx-auto" id='login-col'>
              <div className="col">
                <div className="col text-center">
                  <h3>Sing in</h3>
                  <p>Already have an account? <span className='text-info'>Sign up here</span></p>
                </div>
                <div className='col text-center' id='social-media'>
                  <p><i class="fa-brands fa-google"></i> <span>Sing in with Google</span></p>
                </div>
                <div className='col text-center' id='social-media'>
                  <p><i class="fa-brands fa-facebook"></i> <span>Sing in with Facebook</span></p>
                </div>
              </div>
              <form>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary w-100"><i class="fa-solid fa-user px-2"></i>Submit</button>
              </form>
            </div>
        </div>
       </div>
    </>
  )
}
