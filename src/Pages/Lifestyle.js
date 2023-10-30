import React from 'react'
import Nav from '../Camponent/Nav/Nav'
import Banner2 from '../Camponent/Banner/Banner2'
import Cardlist2 from '../Camponent/Cardlist/Cardlist2'
import Join from '../Camponent/Join/Join'
import Footer from '../Camponent/Footer/Footer'
import Cardlist from '../Camponent/Cardlist/Cardlist'
import Cardlist4 from '../Camponent/Cardlist/Cardlist4'

export default function Lifestyle() {
  return (
    <>
       <Nav/>
       <Banner2 bannerTitle="Your LifeStyle"/>
       <Cardlist/>
       <Cardlist4/>
       <Cardlist2/>
       <Join/>
       <Footer/>
    </>
  )
}
