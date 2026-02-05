import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <>
     <BreadCrumb title={'Blogs'}/> 

     {/* blogs section */}
     <section className="w3l-text-11 py-5">
  <div className="text11 py-md-5 py-4">
    <div className="container">
	<div style={{argin: '8px auto', display: 'block', textAlign:'center'}}></div>
      <div className="row">

        <div className="col-lg-8 text11-content">
          <div className="item">
            <div className="card">
              <div className="card-header p-0 position-relative border-0">
                <Link to="/singleBlog">
                  <img className="card-img-bottom d-block radius-image" src="assets/images/b1.jpg"
                    alt="Card image cap"/>
                </Link>
              </div>
              <div className="card-body p-0 blog-details">
                <h6 className="mt-4">Aug 22, 2020</h6>
                <a href="#admin" className="admin">- by Steven Rich </a>
                <br/>
                <Link to="/singleBlog" className="blog-desc">New restaurant town that Looking think that</Link>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae voluptatum laboriosam
                  voluptate soluta est obcaecati, quam aperiam nam natus dicta tenetur? Dolore.</p>
                  <Link to="/singleBlog" className="btn btn-style btn-primary mt-lg-4 mt-4">Read More <span className="fa fa-chevron-right"></span></Link>
                </div>
            </div>
          </div>
          <div className="item mt-5 pt-lg-3">
            <div className="card">
              <div className="card-header p-0 position-relative border-0">
                <Link to="/singleBlog">
                  <img className="card-img-bottom d-block radius-image" src="assets/images/b2.jpg"
                    alt="Card image cap"/>
                </Link>
              </div>
              <div className="card-body p-0 blog-details">
                <h6 className="mt-4">Aug 22, 2020</h6>
                <a href="#admin" className="admin">- by Steven Rich </a>
                <br/>
                <Link to="/singleBlog" className="blog-desc">New restaurant town that Looking think that</Link>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae voluptatum laboriosam
                  voluptate soluta est obcaecati, quam aperiam nam natus dicta tenetur? Dolore.</p>
                  <Link to="/singleBlog" className="btn btn-style btn-primary mt-lg-4 mt-4">Read More <span className="fa fa-chevron-right"></span></Link>
              </div>
            </div>
          </div>
          <div className="item mt-5 pt-lg-3">
            <div className="card">
              <div className="card-header p-0 position-relative border-0">
                <Link to="/singleBlog">
                  <img className="card-img-bottom d-block radius-image" src="assets/images/b3.jpg"
                    alt="Card image cap"/>
                </Link>
              </div>
              <div className="card-body p-0 blog-details">
                <h6 className="mt-4">Aug 22, 2020</h6>
                <a href="#admin" className="admin">- by Steven Rich </a>
                <br/>
                <Link to="/singleBlog" className="blog-desc">New restaurant town that Looking think that</Link>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae voluptatum laboriosam
                  voluptate soluta est obcaecati, quam aperiam nam natus dicta tenetur? Dolore.</p>
                  <Link to="/singleBlog" className="btn btn-style btn-primary mt-lg-4 mt-4">Read More <span className="fa fa-chevron-right"></span></Link>
              </div>
            </div>
          </div>
           {/* pagination  start*/}
          <div className="paginarions mt-5 pt-lg-5">
            <ul className="pager">
              <li className="pager__item pager__item--prev"><a className="pager__link" href="#"><span
                    className="fa fa-chevron-left" aria-hidden="true"></span></a></li>
              <li className="pager__item"><a className="pager__link" href="#">...</a></li>
              <li className="pager__item"><a className="pager__link" href="#">1</a></li>
              <li className="pager__item active"><a className="pager__link" href="#">2</a></li>
              <li className="pager__item"><a className="pager__link" href="#">3</a></li>
              <li className="pager__item"><a className="pager__link" href="#">4</a></li>
              <li className="pager__item"><a className="pager__link" href="#">5</a></li>
              <li className="pager__item"><a className="pager__link" href="#">6</a></li>
              <li className="pager__item"><a className="pager__link" href="#">...</a></li>
              <li className="pager__item pager__item--next"><a className="pager__link" href="#"><span
                    className="fa fa-chevron-right" aria-hidden="true"></span></a></li>
            </ul>
          </div>
          {/* //pagination  end*/}
     

        </div>
        <div className="sidebar-side col-lg-4 col-md-12 col-sm-12 mt-lg-0 mt-5">
          <aside className="sidebar">
            <div className="sidebar-widget sidebar-blog-category">

            <div className="textwidget mx-auto text-center">
              <a href="#"> <img className="rounded-circle align-center img-fluid" src="assets/images/admin.jpg" alt="user_logo"/></a>
                     <div className="sidebar-title">
                      <h4 className="mb-2 mt-3">Jack Harry</h4>
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
          {/* Blog Category Widget */}
            <div className="sidebar-widget sidebar-blog-category">
              <div className="sidebar-title">
                <h4>Search here</h4>
              </div>
            <form action="#" className="search-form" method="post">
              <input type="search" name="search" placeholder="Search..." />
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
                <figure className="post-thumb"><img src="assets/images/b4.jpg" className="radius-image" alt=""/></figure>
                <div className="text"><a href="blog-single.html">New restaurant town that Looking think that</a>
                </div>
                <div className="post-info">Aug 11, 2020</div>
              </article>

              <article className="post">
                <figure className="post-thumb"><img src="assets/images/b3.jpg" className="radius-image" alt=""/></figure>
                <div className="text"><a href="blog-single.html">New restaurant town that Looking think that
                  </a></div>
                <div className="post-info">Aug 22, 2020</div>
              </article>

              <article className="post">
                <figure className="post-thumb"><img src="assets/images/b5.jpg" className="radius-image" alt=""/></figure>
                <div className="text"><a href="blog-single.html">New restaurant town that Looking think that</a>
                </div>
                <div className="post-info">Aug 13, 2020</div>
              </article>

            </div>

            {/* sidebar sticky  */}
            <div className="sidebar-sticky">
              <div className="sidebar-sticky-fix">
              {/* Blog Category Widget */}

                {/* Tags Widget */}
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
