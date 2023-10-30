import React from 'react'
import Nav from '../Camponent/Nav/Nav'
import Banner2 from '../Camponent/Banner/Banner2'
import Cardlist2 from '../Camponent/Cardlist/Cardlist2'
import Cardlist3 from '../Camponent/Cardlist/Cardlist3'
import Join from '../Camponent/Join/Join'
import Footer from '../Camponent/Footer/Footer'

export default function Fashion() {
  return (
    <>
       <Nav/>
       <Banner2 bannerTitle="Fashion"/>
       <Cardlist2/>
       <Cardlist3/>
       <Join/>
       <Footer/>
    </>
  )
}
