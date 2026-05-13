import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Blog() {
  const posts = [1,2,3]
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h1 className="mb-4">Blog</h1>
        <div className="row g-4">
          {posts.map(post => (
            <div className="col-md-4" key={post}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Blog Post {post}</h5>
                  <p className="card-text">Preview of blog content...</p>
                  <Link to={`/blog/${post}`} className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Blog