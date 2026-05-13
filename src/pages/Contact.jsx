import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h1 className="mb-4">Contact Us</h1>
        <p>Email: support@pixer.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 Digital Ave, Tech City, DC 90210</p>
      </div>
      <Footer />
    </>
  )
}
export default Contact