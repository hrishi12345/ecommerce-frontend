import BreadCrumb from "./BreadCrum"
import Meta from "./Meta"
const ComparePage=()=>{
    return(<>
    <Meta title='Compare'/>
    <BreadCrumb title="Compare"/>
    <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src='images/cross.svg' alt='cross' className="position-absolute cross img-fluid"/>
                        <div className="product-card-image">
                            <img  src="images/watch.jpg" alt="compare"/>
                        </div>
                        <div className="product-compare-details">
                            <h5 className="title">Boat Smart Watch</h5>
                            <h6 className="price mb-3 mt-3">500</h6>
                            <div>
                                <div className="product-details">
                                    <h5 className="brand">Brand:</h5>
                                    <p>Havels</p>
                                </div>
                                <div className="product-details">
                                    <h5 className="brand">Type:</h5>
                                    <p>Watch</p>
                                </div>
                                <div className="product-details">
                                    <h5 className="brand">SKU</h5>
                                    <p>SKU033</p>
                                </div>
                                <div className="product-details">
                                    <h5 className="brand">Availability</h5>
                                    <p>InStock</p>
                                </div>
                                <div className="product-details">
                                    <h5 className="brand">Color</h5>
                                    <p>InStock</p>
                                </div>
                                <div className="product-details">
                                    <h5 className="brand">Size</h5>
                                    <div className="d-flex gap-10">
                                        <p>S</p>
                                        <p>M</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src='images/cross.svg' alt='cross' className="position-absolute cross img-fluid"/>
                        <div className="product-card-image">
                            <img  src="images/watch.jpg" alt="compare"/>
                        </div>
                        <div className="product-compare-details">
                            <h5 className="title">Boat Smart Watch</h5>
                            <h6 className="price mb-3 mt-3">500</h6>
                            <div>
                                <div className="product-details">
                                    <h5 className="brand">Brand:</h5>
                                    <p>Havels</p>
                                </div>
                                <div className="product-details">
                                    <h5 className="brand">Type:</h5>
                                    <p>Watch</p>
                                </div>
                                <div className="product-details">
                                    <h5 className="brand">SKU</h5>
                                    <p>SKU033</p>
                                </div>
                                <div className="product-details">
                                    <h5 className="brand">Availability</h5>
                                    <p>InStock</p>
                                </div>
                                <div className="product-details">
                                    <h5 className="brand">Color</h5>
                                    <p>InStock</p>
                                </div>
                                <div className="product-details">
                                    <h5 className="brand">Size</h5>
                                    <div className="d-flex gap-10">
                                        <p>S</p>
                                        <p>M</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>)
}
export default ComparePage