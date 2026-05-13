import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Homepage() {
  return (
    <>
      <Navbar />
      <section className="bg-primary text-white py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Pixer – Digital Marketplace</h1>
              <p className="lead mb-4">
                Buy and sell premium digital products: templates, source codes, UI kits, 
                graphics, ebooks, courses, and more.
              </p>
              <button className="btn btn-light btn-lg px-4 rounded-pill">Explore Now</button>
              <button className="btn btn-outline-light btn-lg ms-3 px-4 rounded-pill">Become a Vendor</button>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div className="bg-white text-dark p-5 rounded-4 shadow text-center">
                <h3>Digital Assets Marketplace</h3>
                <p>Trusted by 10,000+ creators</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Popular Categories</h2>
          <div className="row g-4">
            {['Templates', 'Source Codes', 'UI Kits', 'Graphics', 'Ebooks', 'Courses'].map((cat, idx) => (
              <div className="col-6 col-md-4 col-lg-2" key={idx}>
                <div className="card text-center border-0 shadow-sm h-100">
                  <div className="card-body">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-3 mx-auto mb-3" style={{ width: 60, height: 60 }}>
                      <span className="text-primary fs-3">🎨</span>
                    </div>
                    <h5 className="card-title">{cat}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Featured Products</h2>
          <div className="row g-4">
            {[1,2,3,4,5,6].map((item) => (
              <div className="col-sm-6 col-md-4 col-lg-3" key={item}>
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-img-top" style={{ height: '180px', background: 'linear-gradient(135deg, #4F46E5, #06B6D4)' }}></div>
                  <div className="card-body">
                    <h5 className="card-title">Premium UI Kit Pro</h5>
                    <p className="card-text text-muted small">by PixelCraft</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="h5 mb-0 text-primary">$49</span>
                      <button className="btn btn-sm btn-outline-primary">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Homepage