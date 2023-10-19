import React from 'react'
import './Footer.scss'
export default function Footer() {
  return (
    <>
       <div className="container-fluid text-white py-5" id='footer-cf'>
        <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="col">
                    <h3 className='text-uppercase'>fashion</h3>
                    <p className='py-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate incidunt deleniti ab distinctio quidem.</p>
                    <ul className='d-flex text-center list-unstyled'>
                        <a href="/" className='text-dark'>
                            <li><i class="fa-brands fa-facebook-f"></i></li>
                        </a>
                        <a href="/" className='text-dark mx-3'>
                            <li><i class="fa-brands fa-instagram"></i></li>
                        </a>
                        <a href="/" className='text-dark'>
                            <li><i class="fa-brands fa-x-twitter"></i></li>
                        </a>
                        <a href="/" className='text-dark mx-3'>
                            <li><i class="fa-brands fa-linkedin-in"></i></li>
                        </a>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12">
                <div className="col">
                    <p><strong>Company</strong></p>
                    <a href="/" className='p-0 nav-link text-white'>
                        <p>About</p>
                    </a>
                    <a href="/" className='p-0 nav-link text-white'>
                        <p>Contact US</p>
                    </a>
                    <a href="/" className='p-0 nav-link text-white'>
                        <p>Support</p>
                    </a>
                    <a href="/" className='p-0 nav-link text-white'>
                        <p>Careers</p>
                    </a>
                </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12">
                <div className="col">
                   <p><strong>Quick Link</strong></p>
                   <a href="/" className='p-0 nav-link text-white'>
                        <p>Share Location</p>
                    </a>
                    <a href="/" className='p-0 nav-link text-white'>
                        <p>Order Tracking</p>
                    </a>
                    <a href="/" className='p-0 nav-link text-white'>
                        <p>Size Guide</p>
                    </a>
                    <a href="/" className='p-0 nav-link text-white'>
                        <p>FAQs</p>
                    </a>
                </div>
            </div>
            <div className="col-lg-2 col-md-12 col-sm-12">
                <div className="col">
                    <p><strong>Legal</strong></p>
                    <a href="/" className='p-0 nav-link text-white'>
                        <p>Terms & Conditions</p>
                    </a>
                    <a href="/" className='p-0 nav-link text-white'>
                        <p>Privacy Policy</p>
                    </a>
                </div>
            </div>
        </div>
       </div>
    </>
    )
}
