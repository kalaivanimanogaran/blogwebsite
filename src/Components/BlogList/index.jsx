import { useSelector } from "react-redux"
import "./style.css"

const BlogList = () => {
  const { blogs} = useSelector((state) => state.blog)


  return (
    <div className="blog-list-wrapper">
      <h1 className="blog-title">My Blog Posts</h1>
      <div className="blog-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            {blog.image && <img src={blog.image} alt={blog.title} />}
            <h2>{blog.title}</h2>
            <p>{blog.description.slice(0, 120)}...</p>
            <button className="read-btn">Read More</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogList
