import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
      <Navbar />
      <div className="container text-center py-5">
        <h1>404</h1>
        <p>Page not found</p>
        <Link to="/" className="btn btn-primary">Go Home</Link>
      </div>
      <Footer />
    </>
  )
}
export default NotFound