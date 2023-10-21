import React from 'react'
import './Sale.scss'
export default function Sale() {
  return (
    <>
        <div className="container-fluid bg-warning py-4" id="sale-cf">
          <div className="container" id='sale-c'>
            <div className=" d-flex justify-content-end">
              {/* <div className="col-lg-6 col-md-6 col-sm-6">
                <img src="https://www.pngarts.com/files/2/Model-PNG-Image-Transparent.png" alt="" />
                
              </div> */}
              <div className="col-8 text-left">
                <h2 className=''><span className='bg-white px-2'>payday</span></h2>
                <h2>sale now</h2>
                <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit, amet consectetur adipisicing elit adipisicing elit. Neque, provident!</p>
                <p><strong>12 Jan 2024</strong></p>
                <p><span>*Term & Conditions apply</span></p>
                <button className='btn btn-info'>Shop now</button>
              </div>
            </div>     
          </div>
        </div>
    </>
    )
}
