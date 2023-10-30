import React from 'react'

export default function Login() {
  return (
    <>
       <div className="container-fluid">
        <div className="container">
            <div className="col">
                <form action="">
                    <input type="text" placeholder='USERNAME' name='urname' required />
                    <input type="password" placeholder='PASSWORD' name='password' required />
                    <button>Login</button>
                </form>
            </div>
        </div>
       </div>
    </>
  )
}
