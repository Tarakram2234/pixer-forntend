import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function About() {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h1 className="mb-4">About Pixer</h1>
        <p>
          Pixer is a leading digital marketplace connecting creators with buyers worldwide.
          We provide a platform for selling templates, source codes, UI kits, graphics,
          ebooks, courses, and more.
        </p>
        <p>Trusted by 10,000+ vendors and 100,000+ customers.</p>
      </div>
      <Footer />
    </>
  )
}
export default About  