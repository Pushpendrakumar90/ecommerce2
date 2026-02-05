import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'

export default function SingleBlog() {
    return (
        <>
            <BreadCrumb title={'Single blog'} />

            <section className="w3l-text-11 py-5">
                <div className="text11 py-md-5 py-4">
                    <div className="container">
                        <div style={{ margin: '8px auto', display: 'block', textAlign: 'center' }}>



                        </div>
                        <div className="row">

                            <div className="col-lg-8 text11-content">
                                <img src="assets/images/b2.jpg" className="img-fluid" alt="" />
                                <h4 className="">Fusce faucibus ante vitae justo efficitur</h4>
                                <h6>Aug 12, 2020</h6>
                                <a href="#admin" className="admin">- by Steven Rich </a>
                                <p className="mt-4 mb-3">Fusce faucibus ante vitae justo efficitur elementum. Donec et ipsum faucibus
                                    arcu
                                    ipsum elementum, luctus justo. ac purus semper. Fusce faucibus ante vitae justo efficitur sed et
                                    elementum. Donec ipsum
                                    faucibus arcu elementum, luctus justo. ac purus semper. Fusce faucibus ante vitae justo
                                    efficitur
                                    elementum. Donec ipsum faucibus arcu...</p>
                                <p className="mb-4">Lorem faucibus fusce ante vitae justo efficitur elementum. Donec ipsum faucibus
                                    arcu elementum, luctus justo. ac purus semper. Fusce faucibus ante vitae justo efficitur
                                    elementum. Donec ipsum faucibus. Donec ipsum faucibus arcu elementum..</p>

                                <p className="mb-3">Lorem faucibus fusce ante vitae justo efficitur elementum. Donec ipsum faucibus
                                    arcu elementum, luctus justo. ac purus semper. Fusce faucibus ante vitae justo efficitur
                                    elementum. Donec ipsum faucibus. Donec ipsum faucibus arcu elementum..</p>
                                <h5 className="quote">
                                    Lorem faucibus fusce ante vitae justo efficitur elementum. Donec ipsum faucibus
                                    arcu elementum, luctus justo. ac purus semper.
                                    <footer className="blockquote-footer mt-3"> Steven Rich </footer>
                                </h5>

                                <p className="mb-3">Lorem faucibus fusce ante vitae justo efficitur elementum. Donec ipsum faucibus
                                    arcu elementum, luctus justo. ac purus semper. Fusce faucibus ante vitae justo efficitur
                                    elementum. Donec ipsum faucibus. Donec ipsum faucibus arcu elementum..</p>
                                <div className="item mt-5">
                                    <h3 className="aside-title">Augbe You are Interested in </h3>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="list-view list-view1">
                                                <div className="grids5-info">
                                                    <a href="blog-single.html" className="d-block zoom"><img src="assets/images/b3.jpg" alt=""
                                                        className="img-fluid radius-image news-image" /></a>
                                                    <div className="blog-info align-self">
                                                        <a href="blog-single.html" className="blog-desc1">
                                                            Giving your Hunger a new Option
                                                        </a>
                                                        <div className="author align-items-center mt-2 mb-1">
                                                            <a href="#">Steven Rich </a> in <a href="#url">Ideas</a>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 mt-lg-0 mt-5">
                                            <div className="list-view list-view1">
                                                <div className="grids5-info">
                                                    <a href="blog-single.html" className="d-block zoom"><img src="assets/images/b4.jpg" alt=""
                                                        className="img-fluid radius-image news-image" /></a>
                                                    <div className="blog-info align-self">
                                                        <a href="blog-single.html" className="blog-desc1">Giving your Hunger a new Option</a>
                                                        <div className="author align-items-center mt-2 mb-1">
                                                            <a href="#">Steven Rich </a> in <a href="#url">Food</a>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <p className="mb-3 mt-5">Lorem faucibus fusce ante vitae justo efficitur elementum. Donec ipsum faucibus
                                        arcu elementum, luctus justo. ac purus semper. Fusce faucibus ante vitae justo efficitur
                                        elementum. Donec ipsum faucibus. Donec ipsum faucibus arcu elementum..</p>

                                    <p className="mb-3">Lorem faucibus fusce ante vitae justo efficitur elementum. Donec ipsum faucibus
                                        arcu elementum, luctus justo. ac purus semper. Fusce faucibus ante vitae justo efficitur
                                        elementum. Donec ipsum faucibus. Donec ipsum faucibus arcu elementum..</p>
                                </div>


                                <div className="social-share-blog mt-5">
                                    <ul className="column3 social m-0 p-0">
                                        <li>
                                            <p className="m-0 mr-4">Share this post :</p>
                                        </li>
                                        <li><a href="https://www.facebook.com" target='_blank' className="facebook"><span className="fa fa-facebook"></span></a></li>
                                        <li><a href="https://www.twitter.com" target='_blank' className="twitter"><span className="fa fa-twitter"></span></a></li>
                                        <li><a href="https://www.instagram.com" target='_blank' className="instagram"><span className="fa fa-instagram"></span></a></li>
                                    </ul>
                                </div>
                                <div className="author-cardview my-5 pt-lg-3">
                                    <div className="row author-card author-listhny align-items-center">
                                        <div className="author-left col-md-3 mb-md-0 mb-4 pl-lg-0">
                                            <a href="#url">
                                                <img className="img-fluid img-curve" src="assets/images/team1.jpg" alt=" " />
                                            </a>
                                        </div>
                                        <div className="author-right col-md-9 position-relative">

                                            <h4 className="mt-0 mb-1"><a href="#url" className="title-team-28">Modi Ji (PM of India)</a></h4>
                                            <p className="para-team mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sapiente distinctio soluta excepturi?
                                                Obcaecati, corporis velit.</p>

                                            <div className="social mt-4">
                                                <li><a href="https://www.facebook.com" target='_blank' className="facebook"><span className="fa fa-facebook"></span></a></li>
                                                <li><a href="https://www.twitter.com" target='_blank' className="twitter"><span className="fa fa-twitter"></span></a></li>
                                                <li><a href="https://www.instagram.com" target='_blank' className="instagram"><span className="fa fa-instagram"></span></a></li>
                                                <li><a href="https://www.linkedin.com" target='_blank' className="linkedin"><span className="fa fa-linkedin"></span></a></li>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <nav className="post-navigation row mt-5 py-4">
                                    <div className="post-prev col-6 pr-sm-5">
                                        <span className="nav-title">
                                            <span className="fa fa-long-arrow-left mr-2"></span> Prev Post </span>
                                        <a href="#url" rel="prev" className="posts-view posts-view-left">
                                            <img src="assets/images/b4.jpg" className="img-fluid postimg d-none d-md-block" />
                                            <label>Giving your Hunger a new Option</label>
                                        </a>
                                    </div>
                                    <div className="post-next col-6 pl-sm-5 text-right">
                                        <span className="nav-title">
                                            Next Post <span className="fa fa-long-arrow-right ml-2"> </span><span className="next-post pull-right"></span> </span>
                                        <a href="#url" rel="next" className="posts-view posts-view-right">
                                            <label>Giving your Hunger a new Option</label>
                                            <img src="assets/images/b5.jpg" className="img-fluid postimg d-none d-md-block" />
                                        </a>
                                    </div>
                                </nav>
                                <div className="comments">
                                    <h3 className="aside-title ">Recent comments(2)</h3>
                                    <div className="comments-grids">
                                        <div className="media-grid">
                                            <div className="media">
                                                <a className="comment-img" target='_blank' href="https://en.wikipedia.org/wiki/Yogi_Adityanath"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL2bEx8j6LDLZAVeH3m-H8IlegBo1WOTx8zw&s" className="img-fluid"
                                                    width="100px" alt="placeholder image" /></a>
                                                <div className="media-body comments-grid-right">
                                                    <h5>Yogi Ji (CM of UP)</h5>
                                                    <ul className="p-0 comment">
                                                        <li className="">Aug 17th, 2020 at 11:00 am</li>
                                                        <li>
                                                            <a href="#comment" className="replay"> Reply</a>
                                                        </li>
                                                    </ul>
                                                    <p>"Waw , Dheeraj ky Food banate ho"
                                                        tempor. Phasellus ipsum bibendum eu nec purus quis tempor dolor set.</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="media-grid">
                                            <div className="media">
                                                <a className="comment-img" target='_blank' href="https://en.wikipedia.org/wiki/Donald_Trump"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1MWm4Uc-yhWB5bkRg8r_Vy6ueABFtDb_qSA&s" className="img-fluid"
                                                    width="100px" alt="placeholder image" /></a>
                                                <div className="media-body comments-grid-right">
                                                    <h5>Donald Trump (US)</h5>
                                                    <ul className="p-0 comment">
                                                        <li className="">Aug 17th, 2020 at 05:45 pm </li>
                                                        <li>
                                                            <a href="#comment" className="replay"> Reply</a>
                                                        </li>
                                                    </ul>
                                                    <p>" Waw, dheeraj What's a nice Post  " mauris. Sed ultricies nec purus quis
                                                        tempor. Phasellus eu nec purus quis tempor.
                                                    </p>
                                                    <div className="media mt-4 mb-0 border-0 px-0">
                                                        <a className="comment-img" href="#url"><img src="assets/images/team3.jpg" className="img-fluid"
                                                            width="100px" alt="placeholder image" /></a>
                                                        <div className="media-body comments-grid-right">
                                                            <h5>Jack Harry</h5>
                                                            <ul className="p-0 comment">
                                                                <li className="">Aug 17th, 2020 at 11:00 am</li>
                                                                <li>
                                                                    <a href="#comment" className="replay"> Reply</a>
                                                                </li>
                                                            </ul>
                                                            <p>Mattis ut hendrerit non, facilisis eget mauris. Sed ultricies nec purus quis
                                                                tempor. dolor set.</p>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="leave-comment-form" id="comment">
                                    <h3 className="aside-title">Add Your Comment</h3>
                                    <form action="#" method="post">
                                        <div className="input-grids">
                                            <div className="row">
                                                <div className="form-group col-lg-4">
                                                    <input type="text" name="Name" className="form-control" placeholder="Name" required="" />
                                                </div>
                                                <div className="form-group col-lg-4">
                                                    <input type="email" name="Email" className="form-control" placeholder="Email" required="" />
                                                </div>
                                                <div className="form-group col-lg-4">
                                                    <input type="text" name="Website" className="form-control" placeholder="Website" required="" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <textarea name="Comment" className="form-control" placeholder="Your Comment" required=""></textarea>
                                            </div>

                                        </div>
                                        <div className="submit text-right">
                                            <button className="btn btn-style btn-primary">Post Comment
                                            </button></div>
                                    </form>
                                </div>


                            </div>
                            <div className="sidebar-side col-lg-4 col-md-12 col-sm-12 mt-lg-0 mt-5">
                                <aside className="sidebar">
                                    <div className="sidebar-widget sidebar-blog-category">

                                        <div className="textwidget mx-auto text-center">
                                            <a href="#"> <img className="rounded-circle align-center img-fluid" src="assets/images/admin.jpg" alt="user_logo" /></a>
                                            <div className="sidebar-title">
                                                <h4 className="mb-2 mt-3">Dheeraj Yadav</h4> 
                                            </div>
                                            <p className="text-center px-lg-4">Hi! I`m an authtor of this blog. Read our post - be in trend!</p>
                                            <div className="widget-social-icons mt-4">
                                                <ul className="column3 social m-0 p-0">

                                                    <li><a href="#facebook" className="facebook"><span className="fa fa-facebook"></span></a></li>
                                                    <li><a href="#twitter" className="twitter"><span className="fa fa-twitter"></span></a></li>
                                                    <li><a href="#linkedin" className="linkedin"><span className="fa fa-linkedin"></span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sidebar-widget sidebar-blog-category">
                                        <div className="sidebar-title">
                                            <h4>Search here</h4>
                                        </div>
                                        <form action="#" className="search-form" method="post">
                                            <input type="search" name="search" placeholder="Search..." required="" />
                                            <button><span className="fa fa-search"></span></button>
                                        </form>
                                    </div>

                                    <div className="sidebar-widget sidebar-blog-category">
                                        <div className="sidebar-title">
                                            <h4>Categories</h4>
                                        </div>
                                        <ul className="blog-cat">


                                            <li><a href="#link"><span className="fa fa-angle-double-right"></span> Burger
                                                <label>4</label></a></li>
                                            <li><a href="#link"><span className="fa fa-angle-double-right"></span> Sandwich <label>8</label></a></li>
                                            <li><a href="#link"><span className="fa fa-angle-double-right"></span> Cranberry Juice <label>8</label></a></li>
                                            <li><a href="#link"><span className="fa fa-angle-double-right"></span> Beverages <label>3</label></a></li>

                                        </ul>
                                    </div>

                                    {/* Popular Post Widget */}
                                    <div className="sidebar-widget popular-posts">
                                        <div className="sidebar-title">
                                            <h4>Recent Posts</h4>
                                        </div>

                                        <article className="post">
                                            <figure className="post-thumb"><img src="assets/images/b4.jpg" className="radius-image" alt="" /></figure>
                                            <div className="text"><Link to="/singleBlogs">New restaurant town that Looking think that</Link>
                                            </div>
                                            <div className="post-info">Aug 11, 2020</div>
                                        </article>

                                        <article className="post">
                                            <figure className="post-thumb"><img src="assets/images/b3.jpg" className="radius-image" alt="" /></figure>
                                            <div className="text"><Link to="/singleBlogs">New restaurant town that Looking think that</Link></div>
                                            <div className="post-info">Aug 22, 2020</div>
                                        </article>

                                        <article className="post">
                                            <figure className="post-thumb"><img src="assets/images/b5.jpg" className="radius-image" alt="" /></figure>
                                            <div className="text"><Link to="/singleBlogs">New restaurant town that Looking think that</Link>
                                            </div>
                                            <div className="post-info">Aug 13, 2020</div>
                                        </article>

                                    </div>


                                    <div className="sidebar-sticky">
                                        <div className="sidebar-sticky-fix">

                                            <div className="sidebar-widget popular-tags">
                                                <div className="sidebar-title">
                                                    <h4>Our Tags</h4>
                                                </div>
                                                <a href="#url">Beverages</a>
                                                <a href="#url">Sandwich</a>
                                                <a href="#url">Juice</a>
                                                <a href="#url">Pizzas</a>
                                                <a href="#url">Burger</a>
                                                <a href="#url">Coffee</a>
                                                <a href="#url">Desserts</a>
                                            </div>


                                        </div>
                                    </div>


                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
