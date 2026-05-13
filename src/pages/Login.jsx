import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }
    if (!email.includes('@')) {
      setError('Enter a valid email')
      return
    }
    // Mock login – in real app, call API
    localStorage.setItem('user', JSON.stringify({ email, role: 'buyer' }))
    navigate('/dashboard') // Redirect to user dashboard (create later)
  }

  return (
    <>
      <Navbar />
      <section className="py-5 bg-light" style={{ minHeight: '80vh' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="card shadow-sm border-0 rounded-4 p-4">
                <h2 className="text-center mb-4">Login to Pixer</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="remember" />
                    <label className="form-check-label" htmlFor="remember">Remember me</label>
                  </div>
                  <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>
                  <div className="text-center">
                    <Link to="/forgot-password" className="text-decoration-none">Forgot password?</Link>
                  </div>
                </form>
                <hr />
                <div className="text-center">
                  <p>Or login with</p>
                  <div className="d-flex justify-content-center gap-2">
                    <button className="btn btn-outline-secondary">Google</button>
                    <button className="btn btn-outline-secondary">GitHub</button>
                  </div>
                  <p className="mt-3">Don't have an account? <Link to="/register">Register</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
export default Login