import React, { Component } from 'react';
import { Route } from 'react-router-dom'

class Footer extends Component {
    render() {
      return (
<div>

  {/* <!-- Footer ================================================================== --> */}
  <div  id="footerSection">
  <div class="container">
      <div class="row">
          <div class="span3">
              <h5>ACCOUNT</h5>
              <a href="login.html">YOUR ACCOUNT</a>
              <a href="login.html">PERSONAL INFORMATION</a> 
              <a href="login.html">ADDRESSES</a> 
              <a href="login.html">DISCOUNT</a>  
              <a href="login.html">ORDER HISTORY</a>
           </div>
          <div class="span3">
              <h5>INFORMATION</h5>
              <a href="contact.html">CONTACT</a>  
              <a href="register.html">REGISTRATION</a>  
              <a href="legal_notice.html">LEGAL NOTICE</a>  
              <a href="tac.html">TERMS AND CONDITIONS</a> 
              <a href="faq.html">FAQ</a>
           </div>
          <div class="span3">
              <h5>OUR OFFERS</h5>
              <a href="#">NEW PRODUCTS</a> 
              <a href="#">TOP SELLERS</a>  
              <a href="special_offer.html">SPECIAL OFFERS</a>  
              <a href="#">MANUFACTURERS</a> 
           </div>
          <div id="socialMedia" class="span3 pull-right">
              <h5>SOCIAL MEDIA </h5>
              <a href="#"><i class="fab fa-facebook-f" alt='facebook'></i></a>
              <a href="#"><i class="fab fa-twitter" alt='twitter'></i></a>
              <a href="#"><i class="fab fa-instagram" alt="instagram"></i></a>
           </div> 
       </div>
      <p class="pull-right">&copy; Basketin.com</p>
  </div>
  </div>
  {/* <!-- Container End --> */}
  </div>

      )
      }
    }
export default Footer;