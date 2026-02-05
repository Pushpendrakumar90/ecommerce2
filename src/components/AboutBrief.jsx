import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutBrief() {
  return (
    <>
       <section className="w3l-grids-3 py-5">
        <div className="container py-lg-5 py-md-4">
            <div className="row bottom-ab-grids">
                <div className="col-lg-6 bottom-ab-left pr-lg-5">
                    <span className="subhny-title mb-2">Faster than light</span>
                    <h3 className="hny-title mb-4">Giving your Hunger a new Option</h3>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic odio
                        voluptatem
                        tenetur consequatur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                        cubilia. </p>
                    <ul className="cont-4 mt-4">
                        <li><span className="fa fa-check"></span>Pharetra massa init ultricies labore dolor amet</li>
                        <li><span className="fa fa-check"></span>Dolore magna aliqua init sodales tempor</li>
                        <li><span className="fa fa-check"></span>Incididunt ut labore et, pharetra massa</li>
                    </ul>
                    <Link to="/about" className="btn btn-style btn-primary mt-lg-5 mt-4">Read More <span
                            className="fa fa-chevron-right"></span></Link>
                </div>
                <div className="col-lg-6 bottom-right-grids mt-lg-0 mt-5">
                    <img src="assets/images/pic3.png" alt="" className="img-fluid" />
                </div>
            </div>
        </div>
        
    </section>
    </>
  )
}
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
