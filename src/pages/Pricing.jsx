import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Pricing() {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h1 className="mb-4">Pricing Plans</h1>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 text-center p-3">
              <h3>Free</h3>
              <p>$0 / month</p>
              <p>Basic features for buyers</p>
              <button className="btn btn-outline-primary">Get Started</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 text-center p-3 border-primary">
              <h3>Pro Vendor</h3>
              <p>$29 / month</p>
              <p>Sell unlimited products</p>
              <button className="btn btn-primary">Choose Plan</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 text-center p-3">
              <h3>Enterprise</h3>
              <p>Custom pricing</p>
              <p>Dedicated support</p>
              <button className="btn btn-outline-primary">Contact Sales</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Pricing