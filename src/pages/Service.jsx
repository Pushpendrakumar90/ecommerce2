import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import OurServices from '../components/OurServices'
import WeDo from '../components/WeDo'
import WeCook from '../components/WeCook'

export default function Service() {
  return (
    <>
      <BreadCrumb title={'Services'}/>

      <div style={{margin: '8px auto', display: 'block', textAlign:'center'}}></div>
      <OurServices/>
      <WeDo/>
      <WeCook/>
      <div style={{margin: '8px auto', display: 'block', textAlign:'center'}}></div>

    </>
  )
}
