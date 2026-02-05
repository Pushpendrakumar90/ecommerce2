import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'

export default function Error() {
  return (
    <>
    <BreadCrumb title={'404'}/>
    <div style={{margin: '8px auto', display: 'block', textAlign:'center'}}></div>
       <section className="error-page py-5 text-center ">
    <div className="container py-md-5 py-sm-4">
        <div className="main-cover w3">
          <img src="assets/images/404.png" className="img-fluid" alt=""/>
            <h5 className="hny-title mt-4">Uh-oh Page not found...</h5>
           <p className="">Try using the button below to go to main page of the site</p>
            <Link to="/" className="btn btn-style btn-primary mt-4">Go Back Home <span className="fa fa-chevron-right"></span></Link>
        </div>
    </div>
</section>

<div style={{margin: '8px auto', display: 'block', textAlign:'center'}}></div>
    </>
  )
}
