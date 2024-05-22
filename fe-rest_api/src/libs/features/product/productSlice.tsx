import { ProductStateType, ProductType } from "@/types/productType"
import { Api } from "@/libs/AxiosInstance"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// Create
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (productData: ProductType, { rejectWithValue }) => {
    try {
      if (!productData.name) return rejectWithValue("Name is required")
      if (!productData.description) return rejectWithValue("Description is required")
      if (productData.price <= 0)
        return rejectWithValue("Price must be greater than zero")
      if (productData.stock < 0) return rejectWithValue("Stock cannot be negative")

      const res = await Api.post("/products", productData)
      console.log(res.data)
      return res.data
    } catch (error) {
      rejectWithValue(error)
      console.log(error)
    }
  },
)

// Fetch All Products
export const getProducts = createAsyncThunk("products/getProducts", async () => {
  try {
    const res = await Api.get("/products")
    return res.data
  } catch (error) {
    console.log(error)
  }
})

//Update
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (productData: ProductType, { rejectWithValue }) => {
    try {
      const res = await Api.put(`/product/${productData.id}`, productData)
      console.log("Update", res.data)
      return res.data
    } catch (error) {
      rejectWithValue(error)
    }
  },
)

//Delete
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId: string, { rejectWithValue }) => {
    try {
      const res = await Api.delete(`/product/${productId}`)
      console.log("Delete", res.data)
      return res.data
    } catch (error) {
      rejectWithValue(error)
    }
  },
)

const initialState: ProductStateType = {
  products: [],
  loading: false,
  error: null,
}

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create
      .addCase(addProduct.pending, (state) => {
        state.loading = true
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false
        state.products.push(action.payload)
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })

      // Fetch All Products
      .addCase(getProducts.pending, (state) => {
        state.loading = true
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
      })

      // Update
      .addCase(updateProduct.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false
        state.products = state.products.filter(
          (product) => product.id !== action.payload.id,
        )
        state.products.unshift(action.payload)
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })

      // Delete
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false
        const { id } = action.payload
        if (id) {
          state.products = state.products.filter((product) => product.id !== id)
        }
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export default productSlice.reducer
