import React from 'react'
import { Link } from 'react-router-dom'

export default function BreadCrumb({title}) {
  return (
    <>
       <section className="w3l-about-breadcrumb text-left py-4">
    <div className="breadcrumb-bg breadcrumb-bg-about py-3">
      <div className="container grid-breadcrumb">
        <ul className="breadcrumbs-custom-path">
          <li><Link to="/">Home</Link></li>
          <li className="active"><span className="fa fa-angle-double-right mx-2" aria-hidden="true"></span> {title} </li>
        </ul>
      </div>
    </div>
  </section>
    </>
  )
}
