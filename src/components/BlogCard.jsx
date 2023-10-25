import { Link } from "react-router-dom"

const BlogCard=()=>{
    return (
        <div className="blog-card">
            <div className="card-image">
                <img src="/images/blog-1.jpg" className='img-fluid w-100'alt="blog"/>
            </div>
            <div className="blog-content">
                <p className="date">1 Dec, 2023</p>
                <h5 className="title">
                    A Beautiful Sunday Morning
                </h5>
                <p className="description">Done very nicely how you doing just get up and work</p>
                <Link className="button" to='/'>Read More</Link>
            </div>
        </div>
    )
}
export default BlogCard