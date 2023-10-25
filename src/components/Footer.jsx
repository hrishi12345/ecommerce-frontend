import React from "react";
import { Link } from "react-router-dom";

const Footer =()=>{
    return (
        <>
        <footer className='py-4'>
            <div className="container-xxl">
                <div className="row align-items-center">
                    <div className="col-5">
                        <div className="footer-top-data d-flex gap-30 align-items-center">
                            <img src="images/newsletter.png" alt='newsletter'></img>
                                <h3 className="mb-0 text-white">Sign Up for newsletter </h3>
                            
                        </div>
                    </div>
                    <div className="col-7">
                    <div className="input-group">
  <input type="text" className="form-control py-1" placeholder="Your Email address" aria-label="Your Email address" aria-describedby="basic-addon2" />
  <span className="input-group-text p-2" id="basic-addon2">Subscribe</span>
  
</div>
                    </div>
                </div>
            </div>
        </footer>
        <footer className="py-4">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-4">
                     <h4 className="text-white mb-4">Contact Us</h4>
                     <div className="text-white py-2 mb-1">
                        <address>Plot no.2<br />Rameshwar Nagri<br />Aurangabad Maharshtra<br />Pincode:431001</address>
                        <a href="tel:+91 9860613468" className=" text-white mt-4 d-block mb-3">9860613468</a>
                        <a href="hrajgure6@gmail.com" className=" text-white mt-4 d-block mb-2">hrajgure6@gmail.com</a>
                        <div className="social_icons"> 
                        <a href="#">
                            <img href='images/linkedin.svg' alt='social'></img>
                        </a>
                        <a href="#">
                        <img href='images/instagram.svg' alt='social'></img>
                        </a>
                        <a href="#">
                        <img href='images/twitter.svg' alt='social'></img>
                        </a>
                        <a href="#">
                        <img href='images/github.svg' alt='social'></img>
                        </a>
        
                        </div>
                     </div>
                    </div>
                    <div className="col-3">
                     <h4 className="text-white mb-4">Information</h4>
                     <div className="footer-links d-flex flex-column">
                            <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                            <Link className="text-white py-2 mb-1">Refund Policy</Link>
                            <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                            <Link className="text-white py-2 mb-1">Terms & Condition</Link>
                            <Link className="text-white py-2 mb-1">Blogs</Link>
                        </div>
                    </div>
                    <div className="col-3">
                        <h4 className="text-white mb-4">Account</h4>
                        <div className="footer-links d-flex flex-column">
                            <Link className="text-white py-2 mb-1">About Us</Link>
                            <Link className="text-white py-2 mb-1">FAQ</Link>
                            <Link className="text-white py-2 mb-1">Contact</Link>
                            <Link className="text-white py-2 mb-1">Watches</Link>
                            
                        </div>
                    </div>
                    <div className="col-2">
                        <h4 className="text-white mb-4">Quick links</h4>
                        <div className="footer-links d-flex flex-column">
                            <Link className="text-white py-2 mb-1">Laptops</Link>
                            <Link className="text-white py-2 mb-1">HeadPhones</Link>
                            <Link className="text-white py-2 mb-1">Tablets</Link>
                            <Link className="text-white py-2 mb-1">Watches</Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <footer className="py-4">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <p className="text-center text-white mb-0">
                            &copy;{new Date().getFullYear()}; Powered by Developers
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        
        </>
    )
}
export default Footer