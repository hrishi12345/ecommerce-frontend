import BreadCrumb from "./BreadCrum"
import Meta from "./Meta"
import ProductCard from "../components/ProductCard"
import ReactStars from "react-rating-stars-component"
import { Link } from "react-router-dom"
import ReactImageZoom from 'react-image-zoom';
import {TbGitCompare} from 'react-icons/tb'
import {AiOutlineHeart} from 'react-icons/ai'
import Container from "../components/Container"

const SingleProduct=()=>{
    const props = {width: 400, height: 500, zoomWidth: 600, img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"}
    return(<>
    <Meta title='Product Name'/>
    <BreadCrumb title="ProductName"/>
    <Container class1='main-product-wrapper py-5 home-wrapper-2'>
    <div className="row">
                <div className="col-6">
                    <div className="main-product-image">
                        <div >
                        <ReactImageZoom {...props} />
                        </div>
                    </div>
                    <div className="other-product-images d-flex flex-wrap gap-15">
                          <div><img src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" className="img-fluid" alt="watch"></img></div>
                          <div><img src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" className="img-fluid" alt="watch"></img></div>
                          <div><img src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" className="img-fluid" alt="watch"></img></div>
                          <div><img src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" className="img-fluid" alt="watch"></img></div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="product-details">

                        <div className="border-bottom">
                        <h3 className="title">Kids HeadPhones</h3>
                        </div>
                        <div className="border-bottom py-3">
                            <p className="price">100</p>
                            <div className="d-flex align-items-center gap-10">
                            <ReactStars count={5} size={24} value="3" activeColor="#ffd700"/>
                            <p className="mb-0">(2 reviews)</p>
                            </div>
                            <a href="review">Write a review</a>
                        </div>
                        <div className="border-bottom">
                            <div className="d-flex gap-10 align-items-center my-2">
                                <h3 className="product-heading">Type:</h3><p className="product-data">Watch</p>
                            </div>
                            <div className="d-flex gap-10 align-items-center my-2">
                                <h3 className="product-heading">Brand:</h3><p className="product-data">Boat</p>
                            </div>
                            <div className="d-flex gap-10 align-items-center my-2">
                                <h3 className="product-heading">Categories:</h3><p className="product-data">Watch</p>
                            </div>
                            <div className="d-flex gap-10 align-items-center my-2">
                                <h3 className="product-heading">Tags:</h3><p className="product-data">Watch</p>
                            </div>
                            <div className="d-flex gap-10 align-items-center my-2">
                                <h3 className="product-heading">Availability:</h3><p className="product-data">InStock</p>
                            </div>
                            <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                <h3 className="product-heading">Size:</h3>
                                <div className="d-flex gap-15 flex-wrap"><span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                                <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                                <span className="badge border border-1 bg-white text-dark border-secondary">L</span>
                                <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>

                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                                <h3 className="product-heading">Quantity:</h3>
                                <div className="">
                                    <input type="number" name="" min={1} max={50} className="form-control" style={{"width":"70px"}} id=""/>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                <button className="button border-0">ADD TO CART</button>
                         <button className="button signup">BUY IT NOW</button>
                         
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                                <div><a href="/compare" className="fs-5 me-2"><TbGitCompare />Add to compare</a></div>
                                <div>
                                <a href="/wishlist" className="fs-5 me-2"><AiOutlineHeart />WishList</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </Container>
    <Container class1='description-wrapper py-5 home-wrapper-2'>
    <div className="row">
                
                <div className="col-12">
                <h4> Description</h4> 
                    <div className="bg-white p-3">
               
                    <p >Very Nice Headphones ldjsnsndndjfnjlgdnflndkfnlgdnfknsdlkfndknklds</p>
                </div>
                </div>
            </div>
    </Container>
    <Container class1='reviews-wrapper py-5 home-wrapper-2'>
    <div className="row">
                <div className="col-12">
                    <h4>Reviews</h4>
                    <div className="bg-white p-3">
                        <h4>Customer Reviews</h4>
                        
                        <div className=" main-header d-flex justify-content-between align-items-end">
                            <div className="d-flex">
                        <ReactStars count={5} size={24} value="4" activeColor="#ffd700"/>
                         <h5 className="p-2">Based on 2 reviews</h5>
                         </div>
                         <Link className="p-2 text-dark text-decoration-underline">Write a Review</Link>
                        </div>
                        <div className="reviews-start">
                        <ReactStars count={5} size={24} value="4" activeColor="#ffd700"/>
                        <h5>Good</h5>
                        </div>
                        <div className="reviews-start">
                        <ReactStars count={5} size={24} value="4" activeColor="#ffd700"/>
                        <h5>Good</h5>
                        </div>
                    </div>
                </div>
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
                
            </div>
   </Container>
    
    </>)
}
export default SingleProduct