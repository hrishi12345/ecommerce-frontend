import BreadCrumb from "./BreadCrum"
import Meta from "./Meta"
import React from "react";
import {AiFillHome} from 'react-icons/ai'
import {IoIosCall} from 'react-icons/io'
import {BiLogoGmail} from 'react-icons/bi'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Container from "../components/Container";
const Contact =()=>{
    return <>
     <Meta title='Contact'/>
    <BreadCrumb title="Contact"/>
    <Container class1="contact-wrapper  home-wrapper-2 py-5">
    <div className="row">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711152197!2d73.78056555797214!3d18.524598599557173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1693371894469!5m2!1sen!2sin" width="600" height="450" className="border-0 w-100" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-12 mt-5">
                <div className="contact-inner-wrapper d-flex justify-content-between">
                 <div>
                    <h3 className="contact-title mb-4">Contact Us</h3>
                    <form className="d-flex flex-column gap-15">
                        <div>
                            <input type="text" className="form-control" placeholder="Name"/>
                        </div>
                        <div>
                            <input type="text" className="form-control" placeholder="Email"/>
                        </div>
                        <div>
                            <input type="tel" className="form-control" placeholder="Mobile Number"/>
                        </div>
                        <div>
                            <textarea type="text" className="w-100 form-control" cols="30" rows='4' placeholder="Comments"/>
                        </div>
                        <div>
                        <button className="button border-0">Submit</button>
                        </div>
                    </form>
                 </div>
                 <div>
                 <h3 className="contact-title mb-4">Get In Touch with Us</h3>
                 <div>
                    <ul className="ps-0">
                        <li className="mb-3 d-flex gap-15 align-items-center"><AiFillHome  className="fs-5"/><address className="mb-0">Jatwada Road Aurangabad</address></li>
                        <li className="mb-3 d-flex gap-15 align-items-center"><IoIosCall className="fs-5"/><a href="tel:+91 9860613469" className="mb-0">9860613469</a></li>
                        <li className="mb-3 d-flex gap-15 align-items-center"><BiLogoGmail className="fs-5"/><a href="ramrajgure4@gmail.com" className="mb-0">ramrajgure4@gmail.com</a></li>
                        <li className="mb-3 d-flex gap-15 align-items-center"><BsFillInfoCircleFill className="fs-5"/><p className="mb-0">Monday-Friday</p></li>
                    </ul>
                 </div>
                 </div>
                </div>
            </div>
         
    </Container>
    
    </>
}
export default Contact