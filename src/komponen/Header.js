import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from './Home'
import Prod from './Prod'
import Proddetail from './Proddetail'

class Header extends Component {
    render() {
      return (
<div>
<div id="header">
  <div class="container">
  <div id="welcomeLine" class="row">
      <div class="span6">Welcome<strong> User</strong></div>
      <div class="span6">
      <div class="pull-right">
          {/* <!-- <a href="product_summary.html"><span class="">Fr</span></a>
          <a href="product_summary.html"><span class="">Es</span></a>
          <span class="btn btn-mini">En</span>
          <a href="product_summary.html"><span>&pound;</span></a> --> */}
          <span class="btn btn-mini">Rp. 3.000.000,-</span>
          <a href="product_summary.html"><span class="">IDR</span></a>
          <a href="product_summary.html"><span class="btn btn-mini btn-primary"><i class="icon-shopping-cart icon-white"></i> [ 3 ] Items in your cart </span> </a> 
      </div>
      </div>
  </div>
  {/* <!-- Navbar ================================================== --> */}
  <div id="logoArea" class="navbar">
  <a id="smallScreen" data-target="#topMenu" data-toggle="collapse" class="btn btn-navbar">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
  </a>
    <div class="navbar-inner">
      <a class="brand" href="index.html"><img src="themes/images/logo_basket.png" width="50px" height="auto" alt="Basketin" title="All About Basketball 100% Original"/>Basketin.com</a>
          <form class="form-inline navbar-search" method="post" action="products.html" >
          <input id="srchFld" class="srchTxt" type="text" />
            <select class="srchTxt">
              <option>ALL</option>
              <option>FOOTWEAR </option>
              <option>APPAREL </option>
              <option>BOTTOM </option>
              <option>ACCESSORIES </option>
              <option>EQUIPMENT </option>
          </select> 
            <button type="submit" id="submitButton" class="btn btn-primary">Go</button>
      </form>
      <ul id="topMenu" class="nav pull-right">
       <li class=""><a href="special_offer.html">Specials Offer</a></li>
       <li class=""><a href="normal.html">Delivery</a></li>
       <li class=""><a href="contact.html">Contact</a></li>
       <li class="">
       <a href="#login" role="button" data-toggle="modal" style={{paddingRight:0}}><span class="btn btn-large btn-success">Login</span></a>
      <div id="login" class="modal hide fade in" tabindex="-1" role="dialog" aria-labelledby="login" aria-hidden="false" >
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
              <h3>Login Block</h3>
            </div>
            <div class="modal-body">
              <form class="form-horizontal loginFrm">
                <div class="control-group">								
                  <input type="text" id="inputEmail" placeholder="Email"/>
                </div>
                <div class="control-group">
                  <input type="password" id="inputPassword" placeholder="Password"/>
                </div>
                <div class="control-group">
                  <label class="checkbox">
                  <input type="checkbox"/> Remember me
                  </label>
                </div>
              </form>		
              <button type="submit" class="btn btn-success">Sign in</button>
              <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
            </div>
      </div>
      </li>
      </ul>
    </div>
  </div>
  </div>
  </div>
  {/* <!-- Header End====================================================================== --> */}

  <Route exact path="/" component={Home}/>
		 <Route path="/Prod" component={Prod}/>
		 <Route path="/Proddetail" component={Proddetail}/>
  </div>
      )
        }
    }

export default Header