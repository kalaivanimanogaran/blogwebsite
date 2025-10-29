import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  blogs: [],
  loading: false,
  error: null,
}

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    fetchBlogsStart(state) {
      state.loading = true
      state.error = null
    },
    fetchBlogsSuccess(state, action) {
      state.loading = false
      state.blogs = action.payload
    },
    fetchBlogsFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
    addBlogStart(state) {
      state.loading = true
      state.error = null
    },
    addBlogSuccess(state, action) {
      state.loading = false
      state.blogs.push(action.payload)
    },
    addBlogFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const {
  fetchBlogsStart,
  fetchBlogsSuccess,
  fetchBlogsFailure,
  addBlogStart,
  addBlogSuccess,
  addBlogFailure,
} = blogSlice.actions

export default blogSlice.reducer

export const fetchBlogs = () => async (dispatch) => {
  dispatch(fetchBlogsStart())
  try {
    const response = await fetch("http://localhost:3000/blogs")

    if (!response.ok) throw new Error("Failed to fetch blogs")
    const data = await response.json()
    dispatch(fetchBlogsSuccess(data))
  } catch (error) {
    dispatch(fetchBlogsFailure(error.message))
  }
}

export const addBlog = (newBlog) => async (dispatch) => {
  dispatch(addBlogStart())
  try {
    const response = await fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBlog),
    })
    if (!response.ok) throw new Error("Failed to add blog")
    const data = await response.json()
    dispatch(addBlogSuccess(data))
  } catch (error) {
    dispatch(addBlogFailure(error.message))
  }
}
