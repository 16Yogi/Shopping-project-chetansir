import React from 'react'
import './Join.scss'
export default function Join() {
  return (
    <>
        <div className="container-fluid py-5 bg-warning" id='join-cf'>
            <div className="container">
                <div className="col-6 mx-auto text-center">
                    <h2 className='text-uppercase'>join shopping community to get monthly promo</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quasi.</p>
                    <div className="form bg-white mx-auto p-2">
                        <form action="">
                            <input type="email" placeholder='Add Your Email here' className='px-2 mx-2'/>
                            <button className='text-uppercase btn btn-dark'>send</button>
                        </form>
                    </div>
                </div>    
            </div>
        </div>
    </>
    )
}
