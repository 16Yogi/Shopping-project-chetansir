import React from 'react'
import './Buypage.scss'


export default function Buypage() {
  return (
    <>
        <div className="container-fluid" id='buypage-cf'>
            <div className="container py-4">
                <div className="col py-3">
                    <p>
                        <span><a href="/home">Home</a></span>
                        <span> / </span>
                        <span><a href="/about">About</a></span>
                        <span> / </span>
                        <span><a href="/fashion">Fashion</a></span>
                        <span> / </span>
                        <span><a href="/fashion">Lorem ipsum</a></span>
                    </p>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="col">
                            <img src="https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="col px-5">
                            <h5>Lorem ipsum</h5>
                            <p>Lorem ipsum dolor sit amet</p>
                            <hr />
                            <span id='bypg'>
                                <strong className="">Rs- 599</strong>
                                <span className="px-2">MRP</span>
                                <del className="px-2">Rs-1000</del>
                                <span className="px-2">(40% OFF)</span>
                            </span>
                            <p className='text-success'>Lorem ipsum dolor sit amet</p>
                            <p className='byp-size'>Select size (Age Group) <span className='byp-size px-3'>Size Chart</span></p>
                            <p className='size'>
                                <span className='py-1 px-3'>10</span>
                                <span className='py-1 px-3 mx-2'>10</span>
                                <span className='py-1 px-3 mx-2'>10</span>
                                <span className='py-1 px-3 mx-2'>10</span>
                                <span className='py-1 px-3 mx-2'>10</span>
                            </p>
                            <div className="row bypro-btn py-4">
                                <div className="col-6"><button className='btn colorbtn'><i class="fa-solid fa-heart"></i> Add Wishlist</button></div>
                                <div className="col-6"><button className='btn'><i class="fa-solid fa-bag-shopping"></i> Buy Now</button></div>
                            </div>
                            <hr />
                            <div className="col">
                                <p className='py-2'><strong>Delivery Options <i class="fa-solid fa-truck"></i></strong></p>
                                <form action="">
                                    <div className='checkpincode'>
                                       <input type="text" className='mx-1'/>
                                       <a href="/">Check</a>                                       
                                    </div>
                                    <div className="addDetails">
                                        <i className=' d-block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, error.</i>
                                        <p className='py-2'></p>
                                        <span className='d-block'>100% Original Products</span>
                                        <span className='d-block'>Try & Buy might be available</span>
                                        <span className='d-block'>Pay on delivery might be available</span>
                                        <span className='d-block'>Easy 14 days returns and exchanges</span>
                                    </div>
                                </form>
                            </div>
                            <div className="col bestOffer py-4">
                                <p className='py-2'><strong>Best Offer <i class="fa-solid fa-tag"></i></strong></p>
                                <p><strong>Best Price: <span className='text-danger'>Rs. 599</span></strong></p>
                                <ul>
                                    <li>Applicable on: Orders above Rs. 899 (only on first purchase)</li>
                                    <li>Coupon code: Abcs200</li>
                                    <li>Coupon Discount: Rs. 133 off (check cart for final savings)</li>
                                </ul>
                                <strong><a href="/">View Eligible Products</a></strong>
                            </div>
                            <hr />
                            <div className="col productDetails">
                                <p className='p-0'><strong>Product Details <i class="fa-solid fa-clipboard"></i></strong></p>
                                <span className='d-block py-3'>Set of 2 Pink and turquiose rompers</span>
                                <span className='d-block'><strong>Size & Fit</strong></span>
                                <span className="d-block">Regular Fit</span>
                                <span className='d-block'><strong>Material & Care</strong></span>
                                <span className="d-block">Cotton</span>
                                <span className="d-block">Cotton</span>
                                <span className='d-block'><strong>Size & Fit</strong></span>
                                <span className="d-block">Regular Fit</span>
                            </div>
                            <hr />
                            <div className="col rating">
                                <p className='p-0'><strong>Ratings <i class="fa-regular fa-star-half-stroke"></i></strong></p>
                                <div className="row">
                                    <div className="col-5 py-4">
                                        <h2>4.8 <i class="fa-solid fa-star text-success"></i></h2>
                                        <i>528 Verified Buyers</i>
                                    </div>
                                    <div className="col-7 py-4">
                                        <ul className='list-unstyled'>
                                            <li>
                                                <span>5 </span>
                                                <span><i class="fa-solid fa-star"></i></span>
                                                <span className='progress'><strong className='bg-success w-10'></strong></span>
                                            </li>
                                            <li>
                                                <span>4 </span>
                                                <span><i class="fa-solid fa-star"></i></span>
                                                <span className='progress'><strong className='bg-success'></strong></span>
                                            </li>
                                            <li>
                                                <span>3 </span>
                                                <span><i class="fa-solid fa-star"></i></span>
                                                <span className='progress'><strong className='bg-success'></strong></span>
                                            </li>
                                            <li>
                                                <span>2 </span>
                                                <span><i class="fa-solid fa-star"></i></span>
                                                <span className="progress"><strong className='bg-warning'></strong></span>
                                            </li>
                                            <li>
                                                <span>1 </span>
                                                <span><i class="fa-solid fa-star"></i></span>
                                                <span className="progress"><strong className='bg-danger'></strong></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
