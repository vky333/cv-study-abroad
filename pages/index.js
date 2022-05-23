import React from 'react'
import Header from '../components/global/header/Header'
import Banner from '../components/global/banner/Banner';
import FourCards from '../components/global/fourCards/FourCards'
import Country from '../components/home/Country'
import JourneySection from '../components/home/JourneySection'
import AccordianSection from '../components/home/AccordianSection'
import Export from '../components/global/export/Export'
import DownloadApp from '../components/global/downloadApp/DownloadApp'
import Footer from '../components/global/footer/Footer'

export default function Home() {
  return (
    <>

    <Header/>
    <Banner/>
    <FourCards/>
    <Country/>
    <JourneySection/>
    <AccordianSection/>
    <Export/>
    <DownloadApp/>
    <Footer/>
    
    </>
  )
}
