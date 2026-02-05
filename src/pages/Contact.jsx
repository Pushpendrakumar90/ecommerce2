import React from 'react'
import BreadCrumb from '../components/BreadCrumb'

export default function Contact() {
  return (
    <>
      <BreadCrumb title={'Contact'} />



      <section className="w3l-contact-11 py-5" id="contact">
        <div className="contacts-main py-lg-5 py-md-4">
          <div style={{ margin: '8px auto', display: 'block', textAlign: 'center' }}>    </div>
          <div className="contant11-top-bg">
            <div className="container">
              <span className="subhny-title text-center mb-2">Contact Us</span>
              <h3 className="hny-title text-center mb-md-5 mb-4">Get in touch with Us</h3>
              <div className="d-grid contact section-gap">
                <div className="contact-info-left d-grid text-center">
                  <div className="contact-info">
                    <span className="fa fa-map-marker" aria-hidden="true"></span>
                    <h4>Location</h4>
                    <p>Bhutiya Nagar, Battoni Chauraha, Pin,304502 GTN UP.</p>
                  </div>
                  <div className="contact-info">
                    <span className="fa fa-phone" aria-hidden="true"></span>
                    <h4>Phone</h4>
                    <p><a href="tel:+91 6307856994">+91 63 0785 6994</a></p>
                    <p><a href="tel:+91 9984129475">+91 99 8412 9475</a></p>
                  </div>
                  <div className="contact-info">
                    <span className="fa fa-envelope" aria-hidden="true"></span>
                    <h4>Email</h4>
                    <p><a href="https://gmail.com" className="email"><span className="__cf_email__" data-cfemail="c7aaa6aeab87a2bfa6aab7aba2e9a4a8aa">rediff12@gmail.in</span></a></p>
                    <p><a href="https://gmail.com" className="email"><span className="__cf_email__" data-cfemail="2e434f47426e4b564f435e424b1f004d4143">rediff9984@gmail.com</span></a></p>
                  </div>
                  <div className="contact-info">
                    <span className="fa fa-clock-o" aria-hidden="true"></span>
                    <h4>Working Hours</h4>
                    <p>Wednesday - Saturday</p>
                    <h5 className='text-warning'>and one day relax</h5>
                    <p>24 x 7  Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>








        <div className="form-41-mian mt-5 pt-lg-5 pt-md-4">
          <div className="container">

            <div className="form-inner-cont">
              <form className="signin-form">
                <div className="d-grid align-form-map">
                  <div className="form-input" >
                    <label htmlFor="w3lName">Name</label>
                    <input type="text" name="w3lName" id="w3lName" placeholder="enter" />
                  </div>


                  <div className="form-input" >
                    <label htmlFor="w3lSender">Email</label>
                    <input type="email" name="w3lSender" id="w3lSender" placeholder="enter" required />
                  </div>


                  <div className="form-input" >
                    <label htmlFor="w3lSender">Subject*</label>
                    <input type="text" name="w3lSubect" placeholder="enter" className="contact-input" />
                  </div>


                  <div className="form-input">
                    <label htmlFor="w3lSender">Phone Number*</label>
                    <input type="number" name="w3lPhone" placeholder="enter" className="contact-input" />
                  </div>


                  <div className="form-input" >
                    <label htmlFor="w3lMessage">Message</label>
                    <textarea placeholder="enter" name="w3lMessage" id="w3lMessage" required></textarea>
                  </div>

                  <div className="submit text-right">
                    <button type="submit" className="btn btn-primary btn-style">Submit Message</button>
                  </div>
                </div>

              </form >


            </div >
            <div className="map mt-5">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.6658287159853!2d77.312091775287!3d28.57979577569358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5106f125cfb%3A0xc516eda25aa8482c!2sDUCAT%20Noida%20Sector%2016!5e0!3m2!1sen!2sin!4v1766908386081!5m2!1sen!2sin" ></iframe>
            </div>
          </div >
        </div >

      </section >

      <div style={{margin: '8px auto', display: 'block', textAlign:'center'}}></div>
    </>
  )
}




