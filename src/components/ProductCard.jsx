import ReactStars from "react-rating-stars-component"
import { Link, useLocation } from "react-router-dom"
const ProductCard=(props)=>{
    let location=useLocation()
    const {grid}=props
    return(<>
        <div className={` ${location.pathname==="/ourstore" ? `gr-${grid}`:"col-3"}`}  >
            <Link to='product/:id'className="product-card position-relative">
                <div className="wishlist position-absolute">
                    <button className="border-0 bg-transparent"><img src="images/wish.svg" alt="wish"/></button>
                </div>
               <div className="product-image">
                    <img src="images/watch.jpg" className="img-fluid" alt="product-i" />
                    <img src="images/laptop.jpg" className="img-fluid" alt="product" />
               </div>
               <div className="product-details">
                <h6 className="brand">Havels</h6>
                <h5 className="product-title">
                    Kids watches Assured best Quality
                </h5>
                <ReactStars count={5} size={24} value={3} activeColor="#ffd700"/>
                <p className={`description ${grid===12 ? "d-block" :"d-none"}`}>This is the product</p>
                <p className="price">
                     100
                </p>
               </div>
               <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                <button className="border-0 bg-transparent"><img src="/images/prodcompare.svg" alt="cart"></img></button>
                    <button className="border-0 bg-transparent"><img src="/images/view.svg" alt="cart"></img></button>
                    
                    <button className="border-0 bg-transparent"><img src="/images/add-cart.svg" alt="cart"></img></button>
                </div>
               </div>
            </Link>
        </div>
        <div className={` ${location.pathname==="/ourstore" ? `gr-${grid}`:"col-3"}`}  >
        <Link className="product-card position-relative">
            <div className="wishlist position-absolute">
                <button className="border-0 bg-transparent"><img src="images/wish.svg" alt="wish"/></button>
            </div>
           <div className="product-image">
                <img src="images/watch.jpg" className="img-fluid" alt="product-i" />
                <img src="images/laptop.jpg" className="img-fluid" alt="product" />
           </div>
           <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
                Kids watches Assured best Quality
            </h5>
            <ReactStars count={5} size={24} value={3} activeColor="#ffd700"/>
            <p className={`description ${grid===12 ? "d-block" :"d-none"}`}>This is the product</p>
            <p className="price">
                 100
            </p>
           </div>
           <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
            <button className="border-0 bg-transparent"><img src="/images/prodcompare.svg" alt="cart"></img></button>
                <button className="border-0 bg-transparent"><img src="/images/view.svg" alt="cart"></img></button>
                
                <button className="border-0 bg-transparent"><img src="/images/add-cart.svg" alt="cart"></img></button>
            </div>
           </div>
        </Link>
    </div>
    </>
    )
}
export default ProductCard 