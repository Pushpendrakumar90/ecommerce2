import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner() {
  return (
    <>
    
         <section id="home" className="w3l-banner py-5">
        <div className="container py-lg-6 py-md-8 ">
            <div className="row align-items-center d-flex justify-content-around">
                <div className="col-lg-6 col-sm-12 mt-lg-0 mt-4">
                    <span className="subhny-title mb-2">Fast and Easy</span>
                    <h3 className="mb-4">Express<br/>
                        Home Delivery</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, excepturi.
                        Distinctio accusantium fugit odit? Fugit ipsam. Sed ac fringilla ex. Nam mauris velit, ac
                        cursus quis, non leo.</p>
                    <div className="mt-sm-5 mt-4">
                        <Link className="btn btn-outline-primary btn-style mr-2" to="/about"> Read More <span
                                className="fa fa-chevron-right"></span></Link>
                        <Link className="btn btn-primary btn-style" to="/menu"> Order Now <span
                                className="fa fa-chevron-right"></span></Link>
                    </div>
                </div>
                <div className="col-lg-6 col-md-4 col-sm-10 mt-lg-0 mt-5">
                    <div className="img-effect text-lg-center">
                        <img src="assets/images/pic1.png" alt="banner" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    </>
  )
}
