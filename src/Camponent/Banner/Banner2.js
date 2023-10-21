import React from 'react'
import './Banner2.scss'
export default function Banner2(banner2name) {
  return (
    <>
        <div className="container-fluid p-0" id='banner2-cf'>
            <div className="container-fluid" id="banner2-cf2">
                <div className="col-lg-6 mx-auto col-md-12 col-sm-12 text-center text-white">
                    <h2 className=''>{banner2name.bannerTitle}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, minus. Eos fuga vitae nisi cum error temporibus, earum tempora dignissimos.</p>
                    <p>
                        <a href="/" className='mx-2 text-warning'>Home</a>
                        /
                        <a href="/" className='mx-2 text-warning'>About us</a>
                        /
                        <a href="/" className='mx-2 text-warning'>Service</a>
                    </p>
                </div>
            </div>
        </div>
    </>
    )
}
