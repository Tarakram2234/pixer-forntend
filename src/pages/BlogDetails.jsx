import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams, Link } from 'react-router-dom'

function BlogDetails() {
  const { id } = useParams()
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h1>Blog Post {id}</h1>
        <p>Full content of blog post {id} goes here.</p>
        <Link to="/blog" className="btn btn-secondary">Back to Blog</Link>
      </div>
      <Footer />
    </>
  )
}
export default BlogDetails