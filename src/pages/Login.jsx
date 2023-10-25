import { Link } from "react-router-dom"
import BreadCrumb from "./BreadCrum"
import Meta from "./Meta"
import Container from "../components/Container"
import {GoogleLogin} from '@react-oauth/google'
import jwt_decode from 'jwt-decode'
import { addUser } from "../service/api"

const Login=()=>{
    const LoginInfo=async (res)=>{
        //credentials are encrypted so we need to decode it with jwt decode
        const decoded=jwt_decode(res.credential)
        const user=await addUser(decoded)
        console.log(user)
    }
    const ErrorLogin=()=>{

    }
    return <>
    <Meta title='Accounts'/>
    <BreadCrumb title="Accounts"/>
    <Container class1='login-wrapper py-5 home-wrapper-2'>
    <div className="row">
            <div className="col-12">
                <div className="auth-card">
                    <div className="d-flex justify-content-between">
                    <div className="border">
                <h5 >Login</h5>
                </div>
                <div>
                    <h5 >SignUp</h5>
                </div>
                </div>
                <form className="d-flex flex-column gap-15">
                    <div>
                        <input type='email' name="email" placeholder="email" className="form-control" />
                    </div>
                    <div>
                        <input type='password' name='password' placeholder="password" className="form-control" />
                    </div>
                    <div>
                        <Link to='/forgotpassword' >Forgot password</Link>
                    </div>
                    <div className="d-flex justify-content-center align-items-center mt-1 gap-15">
                        <button className="button border-0">Login</button>
                         <Link className="button signup">SignUp</Link>
                    </div>
                    <GoogleLogin onSuccess={LoginInfo}
                    onError={ErrorLogin}/>
                </form>
                </div>
                </div>
                
            </div>
    </Container>
   
    
    </>
}
export default Login