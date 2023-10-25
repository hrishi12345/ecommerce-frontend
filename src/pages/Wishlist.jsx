import Container from "../components/Container"
import BreadCrumb from "./BreadCrum"
import Meta from "./Meta"

const Wishlist=()=>{
    return <>
     <Meta title='WishList'/>
    <BreadCrumb title="WishList"/>
    <Container class1='wishlist-wraper home-wrapper-2 py-5'>
    <div className="row">
                <div className="col-3">
                    <div className="wishlist-card position-relative">
                    <img src='images/cross.svg' alt='cross' className="position-absolute cross img-fluid"/>
                        <div className="wishlist-card-image">
                        <img src="images/watch.jpg" className='img-fluid w-100'alt="watch"></img>
                        </div>
                        <div className="py-3 px-3">
                        <h5 className="title">Smart WATCH</h5>
                        <h6 className="price">400</h6>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="wishlist-card position-relative">
                    <img src='images/cross.svg' alt='cross' className="position-absolute cross img-fluid"/>
                        <div className="wishlist-card-image">
                        <img src="images/watch.jpg" className='img-fluid w-100'alt="watch"></img>
                        </div>
                        <div className="py-3 px-3">
                        <h5 className="title">Smart WATCH</h5>
                        <h6 className="price">400</h6>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="wishlist-card position-relative">
                    <img src='images/cross.svg' alt='cross' className="position-absolute cross img-fluid"/>
                        <div className="wishlist-card-image">
                        <img src="images/watch.jpg" className='img-fluid w-100'alt="watch"></img>
                        </div>
                        <div className="py-3 px-3">
                        <h5 className="title">Smart WATCH</h5>
                        <h6 className="price">400</h6>
                        </div>
                    </div>
                </div>
            </div>
    </Container>
   
    </>
}
export default Wishlist