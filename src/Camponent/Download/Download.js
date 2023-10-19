import React from 'react'
import './Download.scss'

export default function Download() {
  return (
    <>
       <div className="container-fluid py-4" id="down-cf">
        <div className="container py-2">
            <div className="row d-flex">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="col">
                        <h2>download app &</h2>
                        <h2>get the voucher!</h2>
                        <p>Lorem ipsum  consectetur adipisicing elit. Consectetur nihil illo iusto pariatur numquam a dignissimos repudiandae impedit quis dicta.</p>
                        <img src="https://truefreedomachievers.com/wp-content/uploads/2018/10/apple-store-png-3.png" alt="" id='app-down'/>
                        <img src="https://truefreedomachievers.com/wp-content/uploads/2018/10/apple-store-png-3.png" alt="" id='app-down'/>
                        {/* <img src="../../../public/img/shop.png" alt="" id='app-down'/> */}
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="col">
                        <img src="https://www.istudiotech.in/wp-content/uploads/2020/04/ecommerce-mobile-app.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
       </div>
    </>
    )
}
