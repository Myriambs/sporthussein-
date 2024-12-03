import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Premium supplements for serious athletes and bodybuilders.</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@musclemax.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 MuscleMax. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer