import React from 'react'
import './About.scss'
export default function About2() {
  return (
    <>
       <div className="container-fluid py-5" id="about-cf">
        <div className="container">
            <div className="row py-5">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <h3 className='py-3'>About <span className='text-warning'>US</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui totam nemo laudantium odit harum maiores impedit eaque laborum beatae aut.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat quo vel similique repellendus omnis velit iste ratione commodi, perferendis, officiis rerum, obcaecati accusantium dicta voluptas quaerat consequatur ducimus laboriosam possimus.</p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src="https://images.pexels.com/photos/1778412/pexels-photo-1778412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                
            </div>
        </div>
       </div>
    </>
    )
}
