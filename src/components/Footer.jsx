function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="text-primary mb-3">Pixer</h5>
            <p className="text-white-50">Premium digital marketplace for creators and developers.</p>
          </div>
          <div className="col-md-2 mb-4">
            <h6>Company</h6>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-white-50 text-decoration-none">About</a></li>
              <li><a href="/contact" className="text-white-50 text-decoration-none">Contact</a></li>
              <li><a href="/pricing" className="text-white-50 text-decoration-none">Pricing</a></li>
            </ul>
          </div>
          <div className="col-md-2 mb-4">
            <h6>Support</h6>
            <ul className="list-unstyled">
              <li><a href="/faq" className="text-white-50 text-decoration-none">FAQ</a></li>
              <li><a href="/terms" className="text-white-50 text-decoration-none">Terms</a></li>
              <li><a href="/privacy" className="text-white-50 text-decoration-none">Privacy</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h6>Follow Us</h6>
            <div>
              <a href="#" className="btn btn-outline-light btn-sm me-2 rounded-circle">📘</a>
              <a href="#" className="btn btn-outline-light btn-sm me-2 rounded-circle">🐦</a>
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle">📷</a>
            </div>
          </div>
        </div>
        <div className="text-center text-white-50 border-top border-secondary pt-3">
          <small>&copy; 2025 Pixer. All rights reserved.</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer