import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Proddetail from './Proddetail'


class Home extends Component {
    render() {
      return (
        <div class="body">
  
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
                  <img src="themes/images/payment_methods.png" title="Payment Methods" alt="Payments Methods"/>
                  <div class="caption">
                    <h5>Payment Methods</h5>
                  </div>
                </div>
      </div>
  {/* <!-- Sidebar end=============================================== --> */}
          <div class="span9 container">		
              <div class="well well-small">
              <h4>Featured Products <small class="pull-right">100+ featured products</small></h4>
              <div class="row-fluid">
              <div id="featured" class="carousel slide">
              <div class="carousel-inner">
                <div class="item active">
                <ul class="thumbnails">
                  <li class="span3">
                    <div class="thumbnail">
                    <i class="tag"></i>
                      <a href="product_details.html"><img src="themes/images/products/mcdavidsleeve.jpg" alt=""/></a>
                      <div class="caption">
                        <h5>McDavid Arm Sleeve</h5>
                        <h4><a class="btn" href="./komponen/Proddetail.js">VIEW</a> <span class="pull-right"><small class="text-dark"> <b> Rp. 300.000,-</b></small></span></h4>
                      </div>
                    </div>
                  </li>
                  <li class="span3">
                    <div class="thumbnail">
                    <i class="tag"></i>
                      <a href="product_details.html"><img src="themes/images/products/celticsswingman.jpg" alt=""/></a>
                      <div class="caption">
                        <h5>Celtics Swingman Jersey</h5>
                        <h4><a class="btn" href="product_details.html">VIEW</a> <span class="pull-right"><small class="text-dark"> <b> Rp. 999.000,-</b></small></span></h4>
                      </div>
                    </div>
                  </li>
                  <li class="span3">
                    <div class="thumbnail">
                    <i class="tag"></i>
                      <a href="product_details.html"><img src="themes/images/products/hardenvol3.jpeg" alt=""/></a>
                      <div class="caption">
                        <h5>Adidas Harden Vol.3</h5>
                         <h4><a class="btn" href="product_details.html">VIEW</a> <span class="pull-right"><small class="text-dark"> <b> Rp. 2.300.000,-</b></small></span></h4>
                      </div>
                    </div>
                  </li>
                  <li class="span3">
                    <div class="thumbnail">
                    <i class="tag"></i>
                      <a href="product_details.html"><img src="themes/images/products/nikekd11.jpeg" alt=""/></a>
                      <div class="caption">
                        <h5>Nike Zoom KD 11</h5>
                         <h4><a class="btn" href="product_details.html">VIEW</a> <span class="pull-right"><small class="text-dark"> <b> Rp. 2.280.000,-</b></small></span></h4>
                      </div>
                    </div>
                  </li>
                </ul>
                </div>
                 <div class="item">
                <ul class="thumbnails">
                  <li class="span3">
                    <div class="thumbnail">
                    <i class="tag"></i>
                      <a href="product_details.html"><img src="themes/images/products/lebron16.jpg" alt=""/></a>
                      <div class="caption">
                        <h5>Nike LeBron 16</h5>
                        <h4><a class="btn" href="product_details.html">VIEW</a> <span class="pull-right"><small class="text-dark"> <b> Rp. 2.909.000,-</b></small></span></h4>
                      </div>
                    </div>
                  </li>
                  <li class="span3">
                    <div class="thumbnail">
                    <i class="tag"></i>
                      <a href="product_details.html"><img src="themes/images/products/uacurry4.jpg" alt=""/></a>
                      <div class="caption">
                        <h5>Under Armour Curry 4</h5>
                        <h4><a class="btn" href="product_details.html">VIEW</a> <span class="pull-right"><small class="text-dark"> <b> Rp. 2.700.000,-</b></small></span></h4>
                      </div>
                    </div>
                  </li>
                  <li class="span3">
                    <div class="thumbnail">
                      <a href="product_details.html"><img src="themes/images/products/procomblong.jpg" alt=""/></a>
                      <div class="caption">
                        <h5>Nike Pro Combat Compression Long</h5>
                         <h4><a class="btn" href="product_details.html">VIEW</a> <span class="pull-right"><small class="text-dark"> <b> Rp. 699.000,-</b></small></span></h4>
                      </div>
                    </div>
                  </li>
                  <li class="span3">
                    <div class="thumbnail">
                      <a href="product_details.html"><img src="themes/images/products/blackheadband.jpg" alt=""/></a>
                      <div class="caption">
                        <h5>Nike Black Headband</h5>
                         <h4><a class="btn" href="product_details.html">VIEW</a> <span class="pull-right"> <small class="text-dark"> <b> Rp. 150.000,-</b></small></span></h4>
                      </div>
                    </div>
                  </li>
                </ul>
                </div>
                 <div class="item">
                <ul class="thumbnails">
                  <li class="span3">
                    <div class="thumbnail">
                      <a href="product_details.html"><img src="themes/images/products/elitebagnike.jpg" alt=""/></a>
                      <div class="caption">
                        <h5>Nike Elite Backpack</h5>
                        <h4><a class="btn" href="product_details.html">VIEW</a> <span class="pull-right"><small class="text-dark"> <b> Rp. 899.000,-</b></small></span></h4>
                      </div>
                    </div>
                  </li>
                  <li class="span3">
                    <div class="thumbnail">
                      <a href="product_details.html"><img src="themes/images/products/aj1sz600.jpg" alt=""/></a>
                      <div class="caption">
                        <h5>Air Jordan 1 Retro</h5>
                        <h4><a class="btn" href="product_details.html">VIEW</a> <span class="pull-right"><small class="text-dark"> <b> Rp. 2.800.000,-</b></small></span></h4>
                      </div>
                    </div>
                  </li>
                  <li class="span3">
                    <div class="thumbnail">
                      <a href="product_details.html"><img src="themes/images/products/benassinike.jpeg" alt=""/></a>
                      <div class="caption">
                        <h5>Nike Benassi Slides</h5>
                         <h4><a class="btn" href="product_details.html">VIEW</a> <span class="pull-right"><small class="text-dark"> <b> Rp. 529.000,-</b></small></span></h4>
                      </div>
                    </div>
                  </li>
                  <li class="span3">
                    <div class="thumbnail">
                      <a href="product_details.html"><img src="themes/images/products/clevperformts.jpg" alt=""/></a>
                      <div class="caption">
                        <h5>Cavaliers Performance T-Shirt</h5>
                         <h4><a class="btn" href="product_details.html">VIEW</a> <span class="pull-right"><small class="text-dark"> <b> Rp. 399.000,-</b></small></span></h4>
                      </div>
                    </div>
                  </li>
                </ul>
                </div>
                 <div class="item">
                <ul class="thumbnails">
                  <li class="span3">
                    <div class="thumbnail">
                      <a href="product_details.html"><img src="themes/images/products/gswshowjacket.png" alt=""/></a>
                      <div class="caption">
                        <h5>Golden State Warriors Jacket</h5>
                        <h4><a class="btn" href="product_details.html">VIEW</a> <span class="pull-right"><small class="text-dark"> <b> Rp. 1.099.000,-</b></small></span></h4>
                      </div>
                    </div>
                  </li>
                  <li class="span3">
                    <div class="thumbnail">
                      <a href="product_details.html"><img src="themes/images/products/aj2sz600.jpg" alt=""/></a>
                      <div class="caption">
                        <h5>Air Jordan 2 Retro</h5>
                        <h4><a class="btn" href="product_details.html">VIEW</a> <span class="pull-right"><small class="text-dark"> <b> Rp. 2.300.000,-</b></small></span></h4>
                      </div>
                    </div>
                  </li>
                  <li class="span3">
                    <div class="thumbnail">
                      <a href="product_details.html"><img src="themes/images/products/warmadidasgreen.jpg" alt=""/></a>
                      <div class="caption">
                        <h5>Adidas Warm-up Pants Green</h5>
                         <h4><a class="btn" href="product_details.html">VIEW</a> <span class="pull-right"><small class="text-dark"> <b> Rp. 449.000,-</b></small></span></h4>
                      </div>
                    </div>
                  </li>
                  <li class="span3">
                    <div class="thumbnail">
                      <a href="product_details.html"><img src="themes/images/products/supremeairforce1mid.jpg" alt=""/></a>
                      <div class="caption">
                        <h5>Supreme Nike Air Force 1 Mid</h5>
                         <h4><a class="btn" href="product_details.html">VIEW</a> <span class="pull-right"><small class="text-dark"> <b> Rp. 9.999.000,-</b></small></span></h4>
                      </div>
                    </div>
                  </li>
                </ul>
                </div>
                </div>
                <a class="left carousel-control" href="#featured" data-slide="prev">‹</a>
                <a class="right carousel-control" href="#featured" data-slide="next">›</a>
                </div>
                </div>
          </div>
          <h4>Latest Products </h4>
                <ul class="thumbnails">
                  <li class="span2">
                    <div class="thumbnail">
                      <Link to="/komponen/Proddetail"><img src="themes/images/products/kyrie5.jpg" alt=""/></Link>
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
  
          </div>
          </div>
      </div>
  </div>
  
        </div>
      )
        }
    }

export default Home