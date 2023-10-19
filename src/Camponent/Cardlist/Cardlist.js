import React from 'react'
import './Cardlist.scss'
export default function Cardlist() {
  return (
    <>
        <div className="container-fluid" id="cardlist-cf">
            <div className="container">
                <h2 className='text-center'>Top List of Shouse</h2>
                <p className='text-center'>Lorem ipsum dolor sit amet</p>
               <div className="row">
                   <div className="col-lg-4 col-md-2 col-sm-12 p-4">
                        <div className="col p-0" id="cardimg">
                            <div>
                                <img src="https://images.meesho.com/images/products/316290850/cdwc1_400.webp" alt="" />
                            </div>
                            <div className='px-4 py-2'>
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
                   <div className="col-lg-4 col-md-2 col-sm-12 p-4">
                        <div className="col p-0" id="cardimg">
                            <div>
                                <img src="https://images.meesho.com/images/products/316290850/cdwc1_400.webp" alt="" />
                            </div>
                            <div className='px-4 py-2'>
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
                   <div className="col-lg-4 col-md-2 col-sm-12 p-4">
                        <div className="col p-0" id="cardimg">
                            <div>
                                <img src="https://images.meesho.com/images/products/316290850/cdwc1_400.webp" alt="" />
                            </div>
                            <div className='px-4 py-2'>
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
