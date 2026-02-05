import React from 'react'

export default function OurServices() {
  return (
    <>
      <div className="w3l-cta5 call-to-action-5-content text-center py-5">
    <div className="container py-md-5">
      <h3 className="subhny-title text-center">What We Offer</h3>
      <h3 className="hny-title text-center mb-4">Our Services</h3>
      <p className="shny-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sapiente commodi maiores
        ullam est nostrum
        aliquam!.Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      <a href="#url" className="btn btn-primary btn-style mb-4">Read More <span className="fa fa-chevron-right"></span></a>
      <div className="three-grids d-grid grid-columns-3">
        <div className="grid">
          <div className="icon">
            <span className="fa fa-free-code-camp" aria-hidden="true"></span>
          </div>
          <div className="icon-info">
            <h4><a href="#">Hot Plates</a></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab sint consectetur quasi mollitia? Qui, nihil?
            </p>
          </div>
        </div>
        <div className="grid">
          <div className="icon">
            <span className="fa fa-flask" aria-hidden="true"></span>
          </div>
          <div className="icon-info">
            <h4><a href="#">Desserts</a></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab sint consectetur quasi mollitia? Qui, nihil?
            </p>
          </div>
        </div>
        <div className="grid">
          <div className="icon">
            <span className="fa fa-book" aria-hidden="true"></span>
          </div>
          <div className="icon-info">
            <h4><a href="#">Spicy foods</a></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab sint consectetur quasi mollitia? Qui, nihil?
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}
