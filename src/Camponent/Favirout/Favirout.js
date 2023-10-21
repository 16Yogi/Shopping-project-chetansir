import React from 'react'
import './Favirout.scss'
export default function Favirout() {
  return (
    <>
       <div className="container-fluid py-5" id="fav-cf">
        <div className="container">
            <h2>Young's Favourite</h2>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 my-5" id='fav-img'>
                    <div className="col p-0" id='fav-wrap'>
                        <div className="col p-0">
                            <img src="https://images.pexels.com/photos/5810700/pexels-photo-5810700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                        <div className="col px-4 py-2">
                            <p className='d-flex justify-content-between'><span className='d-block'>Lorem & ipsum</span><i class="d-block fa-solid fa-arrow-right"></i></p>
                            <p>Lorem ipsum</p>
                            <p className='d-flex'>
                               <strong className='d-block'>RS.200 </strong> 
                               <de className='d-block px-2'>RS. 800</de>
                               <span className='text-danger d-block'>(50% OFF)</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6" id='fav-img'>
                    <div className="col p-0 my-5" id='fav-wrap'>
                        <div className="col p-0">
                            <img src="https://images.pexels.com/photos/6348118/pexels-photo-6348118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                        <div className="col px-4 py-2">
                            <p className='d-flex justify-content-between'><span className='d-block'>Lorem & ipsum</span><i class="d-block fa-solid fa-arrow-right"></i></p>
                            <p>Lorem ipsum</p>
                            <p className='d-flex'>
                               <strong className='d-block'>RS.200 </strong> 
                               <de className='d-block px-2'>RS. 800</de>
                               <span className='text-danger d-block'>(50% OFF)</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </>
    )
}
