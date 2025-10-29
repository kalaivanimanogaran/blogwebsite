import "./style.css"
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa"

const index = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-logo">My Blog</h3>

        <p className="footer-text">
          Sharing knowledge, ideas & experiences about web development.
        </p>

        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©{new Date().getFullYear()} My Blog | All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default index
