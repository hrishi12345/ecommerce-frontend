import { useState } from "react"
import BreadCrumb from "./BreadCrum"
import Meta from "./Meta"
import ReactStars from "react-rating-stars-component"
import ProductCard from "../components/ProductCard"
import Container from "../components/Container"
const OurStore=()=>{
    const [grid ,setGrid]=useState(4)
    const gridSetter=(i)=>{
        setGrid(i)
    }
    return(<>
    <Meta title='OurStore'/>
    <BreadCrumb title="OurStore"/>
    <Container class1='store-wrapper py-5 home-wrapper-2'>
    <div className="row">
                <div className="col-3">
                    <div className="filter-card mb-3">
                        <h3 className="filter-title"> Shop By Categories</h3>
                         <div>
                            <ul className="ps-0">
                            <li>Watch</li>
                            <li>Tv</li>
                            <li>Camera</li>
                            <li>Laptop</li>
                            </ul>
                         </div>
                    </div>
                    <div className="filter-card mb-3">
                        <h3 className="filter-title">Filter By Products</h3>
                        <div> 
                            <h5 className="sub-title">Availability</h5>
                             <div>
                             <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value='' id="" />
                                  <label className="form-check-label" htmlFor="">
                                    InStock
                                  </label>

                             </div>
                             <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value='' id="" />
                                  <label className="form-check-label" htmlFor="">
                                    OutOff Stock
                                  </label>

                             </div>
                             </div>
                             <h5 className="sub-title">Price</h5>
                             <div className="d-flex align-items-center gap-10">
                             <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInputValue" placeholder="From" value="test@example.com" /> 
  <label for="floatingInputValue">From</label>
                             </div>
                             <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInputValue" placeholder="TO" value="test@example.com" /> 
  <label for="floatingInputValue">To</label>
                             </div>
                             </div>
                             <h5 className="sub-title">Colors</h5>
                             <div>
                                <ul className="colors ps-0">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    
                                    <li></li>
                                </ul>
                             </div>
                             <h5 className="sub-title">Size</h5>
                             <div>
                             <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value='' id="color-1 " />
                                  <label className="form-check-label" htmlFor="color-1">
                                    S (2)
                                  </label>

                             </div>
                             
                             </div>
                        </div>
                    </div>
                    <div className="filter-card mb-3">
                        <h3 className="filter-title">Product Tag</h3>
                        <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">HeadPhones</span>
                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                            <span className="badge bg-light text-secondary rounded-3 py-2 px-3">HeadPhones</span>
                        </div>

                    </div>
                    <div className="filter-card mb-3">
                        <h3 className="filter-title">Random Product</h3>
                        <div>
                            <div className="random-products d-flex">
                                <div className="w-50">
                                    <img src='images/watch.jpg' alt='watch 'className="img-fluid"/>
                                </div>
                                <div className="w-50">
                                    <h5>Kids headphone</h5>
                                     <ReactStars count={5} size={24} value="3" activeColor="#ffd700"/>
                                     <b>300</b>
                                </div>
                            </div> 
                            <div className="random-products d-flex py-3">
                                <div className="w-50">
                                    <img src='images/watch.jpg' alt='watch 'className="img-fluid"/>
                                </div>
                                <div className="w-50">
                                    <h5>Kids headphone</h5>
                                     <ReactStars count={5} size={24} value="3" activeColor="#ffd700"/>
                                     <b>300</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-9">
                        <div className="filter-sort-grid mb-4">
                           <div className="d-flex justify-content-between align-items-center">
                           <div className="d-flex align-items-center gap-10">
                                <p className="mb-0 d-block" style={{"width":"100px"}}> Sort By:</p>
                                <select name="" className="form-control form-select" id="">
                                    <option value="manual">Featured</option>
                                    <option value="best-selling" selected="selected">Best Selling</option>
                                    <option value="title-ascending">Alphabetically,A-Z</option>
                                    <option value="title-descending">Alphabetically,Z-A</option>
                                    <option value="price-ascending">Price,low to high</option>
                                    <option value="price-descending">Price,high to low</option>
                                </select>
                            </div>
                            <div className="d-flex align-items-center gap-10">
                                <p className="total-products mb-0">21 Products</p>
                                <div className="d-flex gap-10 align-items-center grid">
                                    <img  onClick={()=>{setGrid(3)}} src="images/gr4.svg" className="d-block img-fluid" alt="grid"/>
                                    
                                    <img  onClick={()=>{setGrid(4)}}  src="images/gr3.svg" className="d-block img-fluid" alt="grid"/>
                                    <img  onClick={()=>{setGrid(6)}}  src="images/gr2.svg" className="d-block img-fluid" alt="grid"/>
                                    <img  onClick={()=>{setGrid(12)}}  src="images/gr.svg" className="d-block img-fluid" alt="grid"/>
                                </div>
                            </div>
                           </div>
                           
                        </div>
                        <div className="products-list pb-5">
                            <div className="d-flex gap-10 flex-wrap">
                           <ProductCard grid={grid} />
                           </div>
                        </div>
                    </div>
            </div>
    </Container>
    
    </>)
}
export default OurStore
