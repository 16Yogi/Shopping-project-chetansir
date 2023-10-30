import React from 'react'
import Nav from '../Camponent/Nav/Nav'
import Banner from '../Camponent/Banner/Banner'
import Toplist from '../Camponent/Toplist/Toplist'
import Cardlist from '../Camponent/Cardlist/Cardlist'
import Sale from '../Camponent/Sale/Sale'
import Favirout from '../Camponent/Favirout/Favirout'
import Download from '../Camponent/Download/Download'
import Join from '../Camponent/Join/Join'
import Footer from '../Camponent/Footer/Footer'
import Cardlist2 from '../Camponent/Cardlist/Cardlist2'

export default function Home() {
  return (
    <>
       <Nav/>
       <Banner/>
       <Toplist/>
       <Cardlist/>
       <Cardlist2/>
       <Sale/>
       <Favirout/>
       <Download/>
       <Join/>
       <Footer/>
    </>
    )
}
