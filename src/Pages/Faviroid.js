import React from 'react'
import Nav from '../Camponent/Nav/Nav'
import Banner2 from '../Camponent/Banner/Banner2'
import Cardlist2 from '../Camponent/Cardlist/Cardlist2'
import Join from '../Camponent/Join/Join'
import Footer from '../Camponent/Footer/Footer'

export default function Faviroid() {
  return (
    <>
       <Nav/>
       <Banner2 bannerTitle="Your Favourite"/>
       <Cardlist2/>
       <Join/>
       <Footer/>
    </>
  )
}
