import React from 'react'
import Nav from '../Camponent/Nav/Nav'
import Footer from '../Camponent/Footer/Footer'
import Join from '../Camponent/Join/Join'
import Banner2 from '../Camponent/Banner/Banner2'
import Cardlist3 from '../Camponent/Cardlist/Cardlist3'
import Cardlist from '../Camponent/Cardlist/Cardlist'
import Cardlist2 from '../Camponent/Cardlist/Cardlist2'

export default function Allproducts() {
  return (
    <>
       <Nav/>
       <Banner2 bannerTitle="All Products"/>
       <Cardlist2/>
       <Cardlist/>
       <Cardlist3/>
       <Join/>
       <Footer/>
    </>
    )
}
