import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import logOut from '../customServise/logOut';

export default function Navbar() {

    let [user] = useState(sessionStorage.getItem('username'))
    if (!user) {
        Navigate('/')
    }
    let first = user;
    let username = first ? first[0].toLocaleUpperCase(): '';
    const id = 1234;

    return (
        <>
            <header id="site-header" className="fixed-top">
                <section className="w3l-header-4">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <h1><Link className="navbar-brand" to="/">
                                <span>Food</span>Sathi
                            </Link></h1>
                            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                                data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="fa icon-expand fa-bars"></span>
                                <span className="fa icon-close fa-times"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav mx-lg-auto">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/">Home </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/service">Services</Link>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Blog <span className="fa fa-angle-down"></span>
                                        </Link>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link className="dropdown-item drop-text" to="/blogs" >Blog Posts</Link>
                                            <Link className="dropdown-item drop-text" to="/SingleBlog" >Blog
                                                Single post</Link>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Go to<span className="fa fa-angle-down"></span>
                                        </Link>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link className="dropdown-item drop-text" to="/*" >404</Link>
                                            <Link className="dropdown-item drop-text" to="/contact" >Contact</Link>
                                            <Link className="dropdown-item drop-text" to="/" >Home
                                                page</Link>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact">Contact</Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link text-success fw-bolder text-decoration-underline " to="/menu">Menu</Link>
                                    </li>

                                    {id && <li className="nav-item ">
                                        <Link className="nav-link text-success fw-bolder text-decoration-underline fs-5" to="/admin-control/1234">Admin</Link>
                                    </li>}
                                </ul>
                                <ul className="navbar-nav search-right mt-lg-0 mt-2">
                                    <li className="nav-item mr-3" title="Search"><Link to='/search' className="btn search-search">
                                        <span className="fa fa-search" aria-hidden="true"></span></Link></li>
                                    <li className="nav-item"><Link href="tel:+(91)6307-856-994"
                                        className="btn btn-primary btn-style d-none d-lg-block btn-style mr-2"><span
                                            className="fa fa-phone mr-3" aria-hidden="true"></span> +(91)6307-856-994</Link>
                                    </li>
                                </ul>
                                <ul>
                                    <li>{username}</li>
                                    <li className='text-danger' onClick={logOut} style={{ cursor: 'pointer' }}>{user ? 'logout' : ''}</li>
                                </ul>


                                <div id="search" className="pop-overlay">
                                    <div className="popup">
                                        <form className="d-sm-flex">
                                            <input type="search" placeholder="Search.." name="search" required="required"
                                                autoFocus />
                                            <button type="submit">Search</button>
                                            <Link className="close" href="#url">&times;</Link>
                                        </form>
                                    </div>
                                </div>

                            </div>

                            <div className="mobile-position">
                                <nav className="navigation">
                                    <div className="theme-switch-wrapper">
                                        <label className="theme-switch" htmlFor="checkbox">
                                            <input type="checkbox" id="checkbox" />
                                            <div className="mode-container">
                                                {/* <i className="gg-sun"></i>
                                        <i className="gg-moon"></i> */}
                                            </div>
                                        </label>
                                    </div>
                                </nav>
                            </div>
                        </nav>
                    </div>
                </section>
            </header>

        </>
    )
}
