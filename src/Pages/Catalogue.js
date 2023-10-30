import React from 'react'
import Nav from '../Camponent/Nav/Nav'
import Banner2 from '../Camponent/Banner/Banner2'
import Footer from '../Camponent/Footer/Footer'
import Download from '../Camponent/Download/Download'
import Join from '../Camponent/Join/Join'
import Cardlist2 from '../Camponent/Cardlist/Cardlist2'
import Cardlist3 from '../Camponent/Cardlist/Cardlist3'

export default function Catalogue() {
  return (
    <>
        <Nav/>
        <Banner2 bannerTitle="Our Catalogue"/>
        <Cardlist2/>
        <Cardlist3/>
        <Download/>
        <Join/>
        <Footer/>
    </>
  )
}
