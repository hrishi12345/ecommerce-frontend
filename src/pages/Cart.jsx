import { Link } from "react-router-dom"
import BreadCrumb from "./BreadCrum"
import Meta from "./Meta"
import { AiFillDelete } from "react-icons/ai"
import Container from "../components/Container"
const Cart=()=>{
    return(<>
    <BreadCrumb title='CART'/>
    <Meta title='Cart'/>
    <Container class1='cart-wrapper home-wrapper-2 py-5'>
    <div className="row">
                <div className="col-12">
                    <div className="cart-header d-flex py-3 justify-content-between align-items-center">
                        <h4 className="cart-col-1">Product</h4>
                        <h4 className="cart-col-2">Price</h4>
                        <h4 className="cart-col-3">Quantity</h4>
                        <h4 className="cart-col-4">Total</h4>
                    </div>
                    <div className="cart-data py-3 mb-2 d-flex py-3 justify-content-between align-items-center">
                        <div className="cart-col-1 gap-15 d-flex align-items-center">
                            <div className="w-25">
                                <img src="images/watch.jpg" className='img-fluid' alt="cart"/>
                            </div>
                            <div className="w-75">
                                <h5 className="title">Watch</h5>
                                <p >Black</p>
                                <p >M</p>
                            </div>
                        </div>
                        <div className="cart-col-2">
                            <h5 className="price">300</h5>
                        </div>
                        <div className="cart-col-3 d-flex align-items-center gap-15">
                            <div><input className="form-control" min={1} max={10} type="number" name="" /></div>
                            <div className="p-3"><AiFillDelete /></div>
                        </div>
                        <div className="cart-col-4">
                        <h5 className="price">300</h5>
                        </div>
                    </div>
                </div>
                <div className="col-12 py-2 mt-4">
                    <div className="d-flex justify-content-between align-items-baseline">
                    <Link className="button">Continue Shopping</Link>
                    <div className="d-flex flex-column align-items-end">
                        <h4>SubTotal : 400</h4>
                        <p>Taxing and shipping Charges</p>
                        <Link className="button">CheckOut</Link>
                    </div>
                    </div>
                   
                </div>
            </div>
    </Container>
   
    </>)
}
export default Cart