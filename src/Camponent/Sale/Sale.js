import React from 'react'
import './Sale.scss'
export default function Sale() {
  return (
    <>
        <div className="container-fluid bg-warning" id="sale-cf">
          <div className="container">
            <div className=" d-flex justify-content-end">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <img src="https://www.pngarts.com/files/2/Model-PNG-Image-Transparent.png" alt="" />
                {/* <img src="https://th.bing.com/th/id/R.0aaf31434c847c865d1793bb63796777?rik=ywZ1DHZsplgryA&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f05%2fModel-PNG.png&ehk=Qt48l6G6hNk3uCeeFqAsOzs%2bqAD%2bv2VwP2YsTldH3Kc%3d&risl=&pid=ImgRaw&r=0" alt="" /> */}
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
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
