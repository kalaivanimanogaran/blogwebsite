import { Link } from "react-router-dom"
import "./style.css"
const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">My Blog</h2>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blogList">Blogs</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/add">Add Blog</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
