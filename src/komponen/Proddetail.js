import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Prod from './Prod'

class Proddetail extends Component {
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
				<li><a class="active" href={Prod}><i class="icon-chevron-right"></i>On Court </a></li>
				<li><a href={Prod}><i class="icon-chevron-right"></i>Casual </a></li>
				<li><a href={Prod}><i class="icon-chevron-right"></i>Slide </a></li>
				</ul>
			</li>
			<li class="subMenu"><a href="#"> Apparel </a>
			<ul style={{display: "none"}}>
				<li><a href={Prod}><i class="icon-chevron-right"></i>Jersey </a></li>
				<li><a href={Prod}><i class="icon-chevron-right"></i>T-Shirt </a></li>												
				<li><a href={Prod}><i class="icon-chevron-right"></i>Jacket </a></li>													
			</ul>
			</li>
			<li class="subMenu"><a href="#"> Bottom </a>
				<ul style={{display: "none"}}>
				<li><a href={Prod}><i class="icon-chevron-right"></i>Short </a></li>
				<li><a href={Prod}><i class="icon-chevron-right"></i>Warmup Pants</a></li>												
				<li><a href={Prod}><i class="icon-chevron-right"></i>Compression Underwear</a></li>									
			</ul>
			</li>
			<li class="subMenu"><a href="#"> Accessories </a>
				<ul style={{display: "none"}}>
				<li><a href={Prod}><i class="icon-chevron-right"></i>Sleeve </a></li>											
				<li><a href={Prod}><i class="icon-chevron-right"></i>Headband </a></li>									
			</ul>
      </li>
			<li class="subMenu"><a href="#"> Equipment </a>
				<ul style={{display: "none"}}>
				<li><a href={Prod}><i class="icon-chevron-right"></i>Bag </a></li>
				<li><a href={Prod}><i class="icon-chevron-right"></i>Ball </a></li>																				
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
    <li><a href={Prod}>Products</a> <span class="divider">/</span></li>
    <li class="active">product Details</li>
    </ul>	
	<div class="row">	  
			<div id="gallery" class="span3">
            <a href="themes/images/products/celticsswingman.jpg" title="produk">
				<img src="themes/images/products/celticsswingman.jpg" style={{width:"100%"}} alt="produk"/>
            </a>
			<div id="differentview" class="moreOptopm carousel slide">
                <div class="carousel-inner">
                  <div class="item active">
                   <a href="themes/images/products/hardenvol3.jpeg"> <img style={{width:"29%"}} src="themes/images/products/hardenvol3.jpeg" alt=""/></a>
                   <a href="themes/images/products/kyrie5.jpg"> <img style={{width:"29%"}} src="themes/images/products/kyrie5.jpg" alt=""/></a>
                   <a href="themes/images/products/lebron16.jpg" > <img style={{width:"29%"}} src="themes/images/products/lebron16.jpg" alt=""/></a>
                  </div>
                  <div class="item">
                   <a href="themes/images/products/gswshowjacket.png" > <img style={{width:"29%"}} src="themes/images/products/gswshowjacket.png" alt=""/></a>
                   <a href="themes/images/products/moltenball.jpg"> <img style={{width:"29%"}} src="themes/images/products/moltenball.jpg" alt=""/></a>
                   <a href="themes/images/products/elitebagnike.jpg"> <img style={{width:"29%"}} src="themes/images/products/elitebagnike.jpg" alt=""/></a>
                  </div>
                </div>
      </div>
			  
			</div>
			<div class="span6">
				<h3>Produk Apa </h3>
				<small>Tipe Produk</small>
				<hr class="soft"/>
				<form class="form-horizontal qtyFrm">
				  <div class="control-group">
					<label class="control-label"><span>Rp. 9.999.999,-</span></label>
					<div class="controls">
					<input type="number" class="span1" placeholder="Qty."/>
					  <button type="submit" class="btn btn-large btn-primary pull-right"> Add to cart <i class=" icon-shopping-cart"></i></button>
					</div>
				  </div>
				</form>
				
				<hr class="soft"/>
				<h4>100 items in stock</h4>
				<form class="form-horizontal qtyFrm pull-right">
				  <div class="control-group">
					<label class="control-label"><span>Color</span></label>
					<div class="controls">
					  <select class="span2">
						  <option>Black</option>
						  <option>Red</option>
						  <option>Blue</option>
						  <option>Brown</option>
						</select>
					</div>
				  </div>
				</form>
				<hr class="soft clr"/>
				<p>
				<b>Penjelasan Produk</b>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel veritatis, aperiam libero explicabo recusandae pariatur voluptas sequi aliquid, laborum optio obcaecati sed asperiores? Consequatur dolor sapiente non doloremque nemo voluptas!
				
				</p>
				<a class="btn btn-small pull-right" href="#detail">More Details</a>
				<br class="clr"/>
			<a href="#" name="detail"></a>
			<hr class="soft"/>
			</div>
			
			<div class="span9">
            <ul id="productDetail" class="nav nav-tabs">
              <li class="active"><a href="#home" data-toggle="tab">Product Details</a></li>
              <li><a href="#profile" data-toggle="tab">Related Products</a></li>
            </ul>
            <div id="myTabContent" class="tab-content">
              <div class="tab-pane fade active in" id="home">
			  <h4>Product Information</h4>
                <table class="table table-bordered">
				<tbody>
				<tr class="techSpecRow"><th colspan="2">Product Details</th></tr>
				<tr class="techSpecRow"><td class="techSpecTD1">Brand: </td><td class="techSpecTD2">Adidas Nike Under Armour Puma</td></tr>
				<tr class="techSpecRow"><td class="techSpecTD1">Model:</td><td class="techSpecTD2">Model Produk</td></tr>
				<tr class="techSpecRow"><td class="techSpecTD1">Size Available:</td><td class="techSpecTD2">44 XL</td></tr>
				</tbody>
				</table>
							</div>
		<div class="tab-pane fade" id="profile">
		<br class="clr"/>
		<hr class="soft"/>
			<div class="tab-pane active" id="blockView">
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
		</div>
				<br class="clr"/>
					 </div>
		</div>
          </div>

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
  
  export default Proddetail