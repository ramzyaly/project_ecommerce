import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Proddetail from './Proddetail'

class Prod extends Component {
    render(){
      return(
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
<div id="mainBody">
	<div class="container">
	<div class="row">
{/* <!-- Sidebar ================================================== --> */}
	<div id="sidebar" class="span3">
		<div class="well well-small"><a id="myCart" href="product_summary.html"><img src="themes/images/ico-cart.png" alt="cart"/>3 Items in your cart  
			{/* <!-- <span class="badge badge-warning pull-right">Rp. 3.500.000,-</span> --> */}
		</a></div>
		<ul id="sideMenu" class="nav nav-tabs nav-stacked">
			<li class="subMenu open"><a href="#"> Footwear </a>
				<ul>
				<li><a class="active" href="products.html"><i class="icon-chevron-right"></i>On Court </a></li>
				<li><a href="products.html"><i class="icon-chevron-right"></i>Casual </a></li>
				<li><a href="products.html"><i class="icon-chevron-right"></i>Slide </a></li>
				</ul>
			</li>
			<li class="subMenu"><a href="#"> Apparel </a>
			<ul style={{display: "none"}}>
				<li><a href="products.html"><i class="icon-chevron-right"></i>Jersey </a></li>
				<li><a href="products.html"><i class="icon-chevron-right"></i>T-Shirt </a></li>												
				<li><a href="products.html"><i class="icon-chevron-right"></i>Jacket </a></li>													
			</ul>
			</li>
			<li class="subMenu"><a href="#"> Bottom </a>
				<ul style={{display: "none"}}>
				<li><a href="products.html"><i class="icon-chevron-right"></i>Short </a></li>
				<li><a href="products.html"><i class="icon-chevron-right"></i>Warmup Pants</a></li>												
				<li><a href="products.html"><i class="icon-chevron-right"></i>Compression Underwear</a></li>									
			</ul>
			</li>
			<li class="subMenu"><a href="#"> Accessories </a>
				<ul style={{display: "none"}}>
				<li><a href="products.html"><i class="icon-chevron-right"></i>Sleeve </a></li>											
				<li><a href="products.html"><i class="icon-chevron-right"></i>Headband </a></li>									
			</ul>
      </li>
			<li class="subMenu"><a href="#"> Equipment </a>
				<ul style={{display: "none"}}>
				<li><a href="products.html"><i class="icon-chevron-right"></i>Bag </a></li>
				<li><a href="products.html"><i class="icon-chevron-right"></i>Ball </a></li>																				
			</ul>
      </li>
		</ul>
		<br/>
		  <div class="thumbnail">
			<img src="themes/images/products/aj3sz600.jpg" alt="aj3size600"/>
			<div class="caption">
			  <h5>Air Jordan 3 Retro</h5>
				<h4 style={{textAlign: "center"}}><a class="btn" href="product_details.html"> <i class="icon-zoom-in"></i></a> <a class="btn" href="#">Add to <i class="icon-shopping-cart"></i></a> <a class="btn btn-primary" href="#">Rp. 2.800.000,-</a></h4>
			</div>
		  </div><br/>
			<div class="thumbnail">
				<img src="themes/images/products/supremeairforce1high.jpg" alt="nikesupremehigh"/>
				<div class="caption">
				  <h5>Supreme Nike Air Force 1 High</h5>
				    <h4 style={{textAlign: "center"}}><a class="btn" href="product_details.html"> <i class="icon-zoom-in"></i></a> <a class="btn" href="#">Add to <i class="icon-shopping-cart"></i></a> <a class="btn btn-primary" href="#">Rp. 20.000.000,-</a></h4>
				</div>
			  </div><br/>
			<div class="thumbnail">
				<img src="themes/images/payment_methods.png" title="Bootshop Payment Methods" alt="Payments Methods"/>
				<div class="caption">
				  <h5>Payment Methods</h5>
				</div>
			  </div>
	</div>
{/* <!-- Sidebar end=============================================== --> */}

	<div class="span9">
    <ul class="breadcrumb">
		<li><a href="index.html">Home</a> <span class="divider">/</span></li>
		<li class="active">Products</li>
    </ul>
	<hr class="soft"/>
	<form class="form-horizontal span6">
		<div class="control-group">
		  <label class="control-label alignL">Sort By </label>
			<select>
              <option>Product name A - Z</option>
              <option>Product name Z - A</option>
              <option>Price Highest first</option>
              <option>Price Lowest first</option>
            </select>
		</div>
	  </form>
		
		<br class="clr"/>
		<hr class="soft"/>
{/* <!-- <div id="myTab" class="pull-right">
 <a href="#listView" data-toggle="tab"><span class="btn btn-large"><i class="icon-list"></i></span></a>
 <a href="#blockView" data-toggle="tab"><span class="btn btn-large btn-primary"><i class="icon-th-large"></i></span></a>
</div> --> */}

	<div class="tab-pane  active" id="blockView">
    <ul class="thumbnails">
				<li class="span2">
				  <div class="thumbnail">
					<Link to={Proddetail}><img src="themes/images/products/kyrie5.jpg" alt=""/></Link>
					<div class="caption">
					  <h5>Nike Kyrie 5</h5>
					  <p> 
						Black Magic 
					  </p>
					 
					  <h4 style={{textAlign: "center"}}><a class="btn" href="product_details.html"> <i class="icon-zoom-in"></i></a> <a class="btn" href="#">Add to <i class="icon-shopping-cart"></i></a> <a class="btn btn-primary" href="#">Rp. 2.900.000,-</a></h4>
					</div>
				  </div>
				</li>
				<li class="span2">
				  <div class="thumbnail">
					<Link to={Proddetail}><img src="themes/images/products/probounce.jpeg"  alt=""/></Link>
					<div class="caption">
					  <h5>Adidas Pro Bounce 2018</h5>
					  <p> 
						Multicolor Black and Blue 
					  </p>
					 <h4 style={{textAlign: "center"}}><a class="btn" href="product_details.html"> <i class="icon-zoom-in"></i></a> <a class="btn" href="#">Add to <i class="icon-shopping-cart"></i></a> <a class="btn btn-primary" href="#">Rp. 1.800.000,-</a></h4>
					</div>
				  </div>
				</li>
				<li class="span2">
				  <div class="thumbnail">
					<Link to={Proddetail}><img src="themes/images/products/hardenvol3.jpeg" alt=""/></Link>
					<div class="caption">
					  <h5>Adidas Harden Vol.3</h5>
					  <p> 
						Invader
					  </p>
					   <h4 style={{textAlign: "center"}}><a class="btn" href="product_details.html"> <i class="icon-zoom-in"></i></a> <a class="btn" href="#">Add to <i class="icon-shopping-cart"></i></a> <a class="btn btn-primary" href="#">Rp. 2.300.000,-</a></h4>
					</div>
				  </div>
				</li>
				<li class="span2">
				  <div class="thumbnail">
					<Link to={Proddetail}><img src="themes/images/products/celticsswingman.jpg" alt=""/></Link>
					<div class="caption">
					  <h5>Celtics Swingman Jersey</h5>
					  <p> 
						Away Jersey 
					  </p>
					  <h4 style={{textAlign: "center"}}><a class="btn" href="product_details.html"> <i class="icon-zoom-in"></i></a> <a class="btn" href="#">Add to <i class="icon-shopping-cart"></i></a> <a class="btn btn-primary" href="#">Rp. 999.000,-</a></h4>
					</div>
				  </div>
				</li>
				<li class="span2">
				  <div class="thumbnail">
					<Link to={Proddetail}><img src="themes/images/products/mcdavidsleeve.jpg" alt=""/></Link>
					<div class="caption">
					  <h5>McDavid Arm Sleeve</h5>
					  <p> 
						Black Color 
					  </p>
					  <h4 style={{textAlign: "center"}}><a class="btn" href="product_details.html"> <i class="icon-zoom-in"></i></a> <a class="btn" href="#">Add to <i class="icon-shopping-cart"></i></a> <a class="btn btn-primary" href="#">Rp. 300.000,-</a></h4>
					</div>
				  </div>
				</li>
				<li class="span2">
				  <div class="thumbnail">
					<Link to={Proddetail}><img src="themes/images/products/moltenball.jpg" alt=""/></Link>
					<div class="caption">
					  <h5>Molten GG7 Official Ball</h5>
					  <p> 
						Orange 
					  </p>
					   <h4 style={{textAlign: "center"}}><a class="btn" href="product_details.html"> <i class="icon-zoom-in"></i></a> <a class="btn" href="#">Add to <i class="icon-shopping-cart"></i></a> <a class="btn btn-primary" href="#">Rp. 799.000,-</a></h4>
					</div>
				  </div>
				</li>
				<li class="span2">
				  <div class="thumbnail">
					<Link to={Proddetail}><img src="themes/images/products/benassinike.jpeg" alt=""/></Link>
					<div class="caption">
					  <h5>Nike Benassi Slides</h5>
					  <p> 
						Black Color 
					  </p>
					   <h4 style={{textAlign: "center"}}><a class="btn" href="product_details.html"> <i class="icon-zoom-in"></i></a> <a class="btn" href="#">Add to <i class="icon-shopping-cart"></i></a> <a class="btn btn-primary" href="#">Rp. 529.000,-</a></h4>
					</div>
				  </div>
				</li>
				<li class="span2">
				  <div class="thumbnail">
					<Link to={Proddetail}><img src="themes/images/products/uacurry4.jpg" alt=""/></Link>
					<div class="caption">
					  <h5>Under Armour Curry 4</h5>
					  <p> 
						Dimes Black 
					  </p>
					   <h4 style={{textAlign: "center"}}><a class="btn" href="product_details.html"> <i class="icon-zoom-in"></i></a> <a class="btn" href="#">Add to <i class="icon-shopping-cart"></i></a> <a class="btn btn-primary" href="#">Rp. 2.700.000,-</a></h4>
					</div>
				  </div>
				</li>
			  </ul>	
	<hr class="soft"/>
	</div>


	<div class="pagination">
			<ul>
			<li><a href="#">&lsaquo;</a></li>
			<li><a href="#">1</a></li>
			<li><a href="#">2</a></li>
			<li><a href="#">3</a></li>
			<li><a href="#">4</a></li>
			<li><a href="#">...</a></li>
			<li><a href="#">&rsaquo;</a></li>
			</ul>
			</div>
			<br class="clr"/>
</div>
</div>
</div>
</div>
{/* <!-- MainBody End ============================= --> */}
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
	{/* <!-- Container End --> */}
	</div>

        </div>
      )
    }
  }
  
  export default Prod