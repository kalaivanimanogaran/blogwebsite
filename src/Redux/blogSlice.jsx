import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchBlogs = createAsyncThunk("blog/fetchBlogs", async () => {
  const response = await fetch("http://localhost:3000/blogs")
  if (!response.ok) throw new Error("Failed to fetch blogs")
  return await response.json()
})

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
    loading: false,
    error: null,
  },
  reducers: {
    createBlog: (state, action) => {
      state.blogs.push({ ...action.payload, id: Date.now() })
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false
        state.blogs = action.payload
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const { createBlog } = blogSlice.actions
export default blogSlice.reducer
