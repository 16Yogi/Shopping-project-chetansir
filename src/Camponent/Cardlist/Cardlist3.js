import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import "./Cardlist3.scss"

export default function Cardlist3() {
    const options = {
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    }
  return (
    <>
        <div className="container-fluid bg-dark py-3" id="cardlist3-cf">
            <div className="container">
                <div className="line bg-info"></div>
                <h3 className='text-center text-white'>New Arpivals</h3>
                <div className="line bg-info"></div>
                <div className="col py-3">
                    <OwlCarousel className="latest-news owl-carousel owl-theme" margin={10} items={"4"} loop={true} mouseDrag={true} dots={true} autoplay={true}
                    {...options} nav>

                        <div className="item rounded">
                            <div className="card rounded product-card border">
                                <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/k/e/3-lp5951-3-layasa-multicolor-original-imaghzbswzhdbcwg.jpeg?q=70" alt="" />
                                <div className="card-body">
                                  <h5 className="card-title">Card title 1</h5>
                                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                  <a href="/" className="btn btn-dark d-block mx-auto">Go somewhere</a>
                                </div>
                            </div>
                        </div>                        
                        <div className="item rounded">
                            <div className="card rounded product-card border">
                                <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/k/e/3-lp5951-3-layasa-multicolor-original-imaghzbswzhdbcwg.jpeg?q=70" alt="" />
                                <div className="card-body">
                                  <h5 className="card-title">Card title</h5>
                                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                  <a href="/" className="btn btn-dark d-block mx-auto">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="item rounded">
                            <div className="card rounded product-card border">
                                <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/k/e/3-lp5951-3-layasa-multicolor-original-imaghzbswzhdbcwg.jpeg?q=70" alt="" />
                                <div className="card-body">
                                  <h5 className="card-title">Card title</h5>
                                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                  <a href="/" className="btn btn-dark d-block mx-auto">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="item rounded">
                            <div className="card rounded product-card border">
                                <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/k/e/3-lp5951-3-layasa-multicolor-original-imaghzbswzhdbcwg.jpeg?q=70" alt="" />
                                <div className="card-body">
                                  <h5 className="card-title">Card title</h5>
                                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                  <a href="/" className="btn btn-dark d-block mx-auto">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="item rounded">
                            <div className="card rounded product-card border">
                                <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/k/e/3-lp5951-3-layasa-multicolor-original-imaghzbswzhdbcwg.jpeg?q=70" alt="" />
                                <div className="card-body">
                                  <h5 className="card-title">Card title</h5>
                                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                  <a href="/" className="btn btn-dark d-block mx-auto">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="item rounded">
                            <div className="card rounded product-card border">
                                <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/k/e/3-lp5951-3-layasa-multicolor-original-imaghzbswzhdbcwg.jpeg?q=70" alt="" />
                                <div className="card-body">
                                  <h5 className="card-title">Card title</h5>
                                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                  <a href="/" className="btn btn-dark d-block mx-auto">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="item rounded">
                            <div className="card rounded product-card border">
                                <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/k/e/3-lp5951-3-layasa-multicolor-original-imaghzbswzhdbcwg.jpeg?q=70" alt="" />
                                <div className="card-body">
                                  <h5 className="card-title">Card title</h5>
                                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                  <a href="/" className="btn btn-dark d-block mx-auto">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        
                    </OwlCarousel>
                </div>
            </div>
        </div>
    </>
  )
}
