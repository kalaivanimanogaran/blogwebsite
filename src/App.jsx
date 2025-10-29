import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import AddBlog from "./Components/AddBlog"
import BlogList from "./Components/BlogList"
import Footer from "./Components/Footer"

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/blogList" element={<BlogList />} />
          <Route path="/add" element={<AddBlog />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
