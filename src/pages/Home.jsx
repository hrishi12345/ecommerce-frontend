import React from "react";
import Marquee from 'react-fast-marquee'
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";

import SpecialProducts from "../components/SpecialProducts";
import Container from "../components/Container";
const Home =()=>{
    return <>
    <Container class1='home-wrapper-1 py-5'>
    <div className="row">
                <div className="col-6">
                <div className="main-banner postition-relative p-3">
  <img src="images/main-banner-1.jpg" className='img-fluid rounded-3' alt="main-banner"></img>
  <div className="main-banner-content position-absolute">
    <h4>SUPERCHARGED FOR PROS.</h4>
    <h5>iPAD S13+ Pro.</h5>
    <p>From 999/mo.</p>
    <Link className="button">BUY NOW</Link>
  </div>
</div>


                   
                </div>
                <div className="col-6">
                    <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                    <div className="small-banner postition-relative">
                    <img src="images/catbanner-01.jpg" className='img-fluid rounded-3' alt="small-banner"></img>
                    <div className="small-banner-content position-absolute">
                        <h4>Best Sale</h4>
                        <h5>Legion</h5>
                        <p>From 2999/mo.</p>
                        
                    </div>
                   </div>
                   <div className="small-banner postition-relative">
                    <img src="images/catbanner-02.jpg" className='img-fluid rounded-3' alt="small-banner"></img>
                    <div className="small-banner-content position-absolute">
                        <h4>New Arrival</h4>
                        <h5>BUY iPAD Air</h5>
                        <p>From 999/mo.</p>
                        
                    </div>
                   </div>
                   <div className="small-banner postition-relative">
                    <img src="images/catbanner-03.jpg" className='img-fluid rounded-3' alt="small-banner"></img>
                    <div className="small-banner-content position-absolute">
                        <h4>15% Off</h4>
                        <h5>SmartWatch 7</h5>
                        <p>From 999/mo.</p>
                        
                    </div>
                   </div>
                   <div className="small-banner postition-relative">
                    <img src="images/catbanner-04.jpg" className='img-fluid rounded-3' alt="small-banner"></img>
                    <div className="small-banner-content position-absolute">
                        <h4>Free Engraving</h4>
                        <h5>AirPods Max</h5>
                        <p>From 999/mo.</p>
                        
                    </div>
                   </div>
                    </div>
                </div>
            </div>
    </Container>
    <Container class1='home-wrapper-2 py-5'>
    <div className="row">
                <div className="col-12">
                    <div className="services d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center gap-15">
                        <img src="images/service.png" alt="services"/>
                        <div>
                           <h6>Free Shipping</h6>
                           <p className="mb-0">From all orders over 500</p>
                        </div>
                        
                      </div>
                      <div className="d-flex align-items-center gap-15">
                        <img src="images/service-02.png" alt="services"/>
                        <div>
                           <h6>Daily Surprise Offers</h6>
                           <p className="mb-0">Save Upto 25%</p>
                        </div>
                        
                      </div>
                      <div className="d-flex align-items-center gap-15">
                        <img src="images/service-03.png" alt="services"/>
                        <div>
                           <h6>Support 24/7</h6>
                           <p className="mb-0">Shop with an expert</p>
                        </div>
                        
                      </div>
                      <div className="d-flex align-items-center gap-15">
                        <img src="images/service-04.png" alt="services"/>
                        <div>
                           <h6>Affordable Prices</h6>
                           <p className="mb-0">Get Factory default Prices</p>
                        </div>
                        
                      </div>
                      <div className="d-flex align-items-center gap-15">
                        <img src="images/service-05.png" alt="services"/>
                        <div>
                           <h6>Secure Payment</h6>
                           <p className="mb-0">100% Protected</p>
                        </div>
                        
                      </div>
                    </div>
                </div>
            </div>
    </Container>
    <Container class1='home-wrapper-2 py-5'> 
    <div className="row">
                <div className="col-12">
                      <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                        <div className="d-flex gap-30 align-items-center">
                            <div>
                                <h6>Music & Gaming</h6>
                                <p>10 ITEMS</p>
                            </div>
                            <img src="images/camera.jpg" alt="camera" />
                        </div>
                        <div className="d-flex gap-30 align-items-center">
                            <div>
                                <h6>Smart Tv</h6>
                                <p>10 ITEMS</p>
                            </div>
                            <img src="images/tv.jpg" alt="camera" />
                        </div>
                        <div className="d-flex gap-30 align-items-center">
                            <div>
                                <h6>HeadPhones</h6>
                                <p>10 ITEMS</p>
                            </div>
                            <img src="images/headphone.jpg" alt="camera" />
                        </div>
                        <div className="d-flex gap-30 align-items-center">
                            <div>
                                <h6>Camera</h6>
                                <p>10 ITEMS</p>
                            </div>
                            <img src="images/camera.jpg" alt="camera" />
                        </div>
                        <div className="d-flex gap-30 align-items-center">
                            <div>
                                <h6>Music & Gaming</h6>
                                <p>10 ITEMS</p>
                            </div>
                            <img src="images/camera.jpg" alt="camera" />
                        </div>
                        <div className="d-flex gap-30 align-items-center">
                            <div>
                                <h6>Smart Tv</h6>
                                <p>10 ITEMS</p>
                            </div>
                            <img src="images/tv.jpg" alt="camera" />
                        </div>
                        <div className="d-flex gap-30 align-items-center">
                            <div>
                                <h6>HeadPhones</h6>
                                <p>10 ITEMS</p>
                            </div>
                            <img src="images/headphone.jpg" alt="camera" />
                        </div>
                        <div className="d-flex gap-30 align-items-center">
                            <div>
                                <h6>Camera</h6>
                                <p>10 ITEMS</p>
                            </div>
                            <img src="images/camera.jpg" alt="camera" />
                        </div>
                       
                      </div>
                </div>
            </div>
            </Container>
    <Container class1='featured-wrapper py-5 home-wrapper-2'>
    <div className="row">
                <div className="col-12">
                    <h3 className="section-heading">Featured Collection</h3>
                    </div>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
    </Container>
    <Container class1='famous-wrapper py-5 home-wrapper-2'>
        <div className="row">
                <div className="col-3">
                    <div className="famous-card position-relative">
                        <img src="images/famous-03.webp"  className='img-fluid' alt="famous"/>
                        <div className="famous-description position-absolute">
                        <h5>Big Screen</h5>
                        <h6>Smart watch series</h6>
                        <p>From 300 or 99/m for 9 months</p>
                        </div>
                        
                    </div>
                    </div>
                    <div className="col-3">
                    <div className="famous-card position-relative">
                        <img src="images/famous-01.jpg"  className='img-fluid' alt="famous"/>
                        <div className="famous-description position-absolute">
                        <h5>Big Screen</h5>
                        <h6>Smart watch series</h6>
                        <p>From 300 or 99/m for 9 months</p>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="col-3">
                    <div className="famous-card position-relative">
                        <img src="images/famous-01.jpg"  className='img-fluid' alt="famous"/>
                        <div className="famous-description position-absolute">
                        <h5>Big Screen</h5>
                        <h6>Smart watch series</h6>
                        <p>From 300 or 99/m for 9 months</p>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            </Container>
    <Container  class1='special-product py-5 home-wrapper-2'>
    <div className="row">
            <div className="col-12">
                    <h3 className="section-heading">Special Products</h3>
                    </div>
            </div>
            <div className="row">
                
                <SpecialProducts /> 
                <SpecialProducts /> 
                <SpecialProducts /> 
                <SpecialProducts /> 
            </div>
            
    </Container>
    <Container class1='popular-wrapper py-5 home-wrapper-2'>
    <div className="row">
                <div className="col-12">
                    <h3 className="section-heading">Our Popular Product</h3>
                    </div>
                
            </div>
            <div className="row">
               
            <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
    </Container>
    <Container class1='marque-wrapper py-5'>
    <div className="row">
                <div className="col-12">
                    <div className="marquee-inner-wrapper card-wrapper">
                        <Marquee className="d-flex">
                           <div className="mx-4 ww-25">
                            <img src="images/brand-01.png" alt="brand" />
                           </div>
                           <div className="mx-4 ww-25">
                            <img src="images/brand-02.png" alt="brand" />
                           </div>
                           <div className="mx-4 ww-25">
                            <img src="images/brand-03.png" alt="brand" />
                           </div>
                           <div className="mx-4 ww-25">
                            <img src="images/brand-04.png" alt="brand" />
                           </div>
                           <div className="mx-4 ww-25">
                            <img src="images/brand-05.png" alt="brand" />
                           </div>
                           <div className="mx-4 ww-25">
                            <img src="images/brand-06.png" alt="brand" />
                           </div>
                           <div className="mx-4 ww-25">
                            <img src="images/brand-07.png" alt="brand" />
                           </div>
                           
                        </Marquee>
                    </div>
                </div>
             </div>
    </Container>
    <Container class1='blog-wrapper py-5 home-wrapper-2'>
    <div className="row">
                <div className="col-12">
                    <h3 className="section-heading">Our Latest Blogs</h3>
                    </div>
                    <div className="d-flex flex-row">
                    <div className="row">
                        <div className="col-9">
                        <BlogCard />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-9">
                        <BlogCard />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-9">
                        <BlogCard />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-9">
                        <BlogCard />
                        </div>
                    </div>
                    </div>
              
                
            </div>
    </Container>
    
   
    </>
}
export default Home