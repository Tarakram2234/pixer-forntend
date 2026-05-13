import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Faq() {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h1 className="mb-4">Frequently Asked Questions</h1>
        <div className="accordion" id="faqAccordion">
          {[
            { q: "How do I buy a product?", a: "Browse products, add to cart, and checkout securely." },
            { q: "How do I become a vendor?", a: "Click 'Become a Vendor' and complete registration." },
            { q: "What payment methods are accepted?", a: "Stripe, Razorpay, and PayPal." }
          ].map((item, idx) => (
            <div className="accordion-item" key={idx}>
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${idx}`}>
                  {item.q}
                </button>
              </h2>
              <div id={`collapse${idx}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Faq