import { useState } from "react"
import { useDispatch } from "react-redux"
import { createBlog } from "../../redux/blogSlice"
import { useNavigate } from "react-router-dom"
import "./style.css"

const AddBlog = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [newBlog, setNewBlog] = useState({
    title: "",
    description: "",
    image: "",
  })

  const handleChange = (e) => {
    setNewBlog({ ...newBlog, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!newBlog.title || !newBlog.description) {
      alert("Please fill title and description!")
      return
    }

    dispatch(createBlog(newBlog))
    alert("Blog added successfully!")

    setNewBlog({ title: "", description: "", image: "" })
    navigate("/blogList")
  }

  return (
    <div className="add-blog-container">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={newBlog.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Blog Description"
          value={newBlog.description}
          onChange={handleChange}
        ></textarea>
        <input
          type="text"
          name="image"
          placeholder="Image URL (optional)"
          value={newBlog.image}
          onChange={handleChange}
        />
        <button type="submit">Add Blog</button>
      </form>
    </div>
  )
}

export default AddBlog
