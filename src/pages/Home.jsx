import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import PopularGoods from '../components/PopularGoods'
import OnlineOrder from '../components/OnlineOrder'
import CustomerStory from '../components/CustomerStory'
import AboutBrief from '../components/AboutBrief'
import GetMoreApplication from '../components/GetMoreApplication'
import ServicePageBlock from '../components/ServicePageBlock'
import getSession from '../customServise/getSession'



export default function Home() {
  let session = sessionStorage.getItem('username')
  let sessionData =  getSession(session);

// {!sessionData && re}
  return (
    <> 
    <Banner /> 
      <PopularGoods/>
      <OnlineOrder/>
      <AboutBrief/>
      <GetMoreApplication/>
      <ServicePageBlock/>
      <CustomerStory/> 
    
    </>
     
  ) 

  
 
}





