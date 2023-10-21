import React from 'react'
import Banner2 from '../Camponent/Banner/Banner2'
import Nav from '../Camponent/Nav/Nav'
import Favirout from '../Camponent/Favirout/Favirout'
import Download from '../Camponent/Download/Download'
import Join from '../Camponent/Join/Join'
import Footer from '../Camponent/Footer/Footer'
import About2 from '../Camponent/About.js/About2'

export default function About() {
  return (
    <>
       <Nav/>
       <Banner2 bannerTitle="About US"/>
       <About2/>
       <Favirout/>
       <Download/>
       <Join/>
       <Footer/>
    </>
    )
}
