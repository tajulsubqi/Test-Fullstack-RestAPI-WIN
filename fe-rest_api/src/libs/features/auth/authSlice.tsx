import { Api } from "@/libs/AxiosInstance"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

interface User {
  id: number | string
  name: string
  email: string
  password: string
}
interface AuthState {
  isAuthenticated: boolean
  user: User[]
  status: "idle" | "loading" | "succeeded" | "failed"
  error: string | null
  token: string | null
}

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await Api.post("/auth/register", userData)
      console.log(res.data)
      return res.data
    } catch (error) {
      rejectWithValue(error)
    }
  },
)

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await Api.post("/auth/login", userData)
      const { token } = res.data
      localStorage.setItem("token", String(token))
      console.log(res.data)
      return res.data
    } catch (error) {
      rejectWithValue(error)
    }
  },
)

export const getUser = createAsyncThunk("auth/getUser", async () => {
  try {
    const res = await Api.get(`/users`)
    console.log(res.data)
    return res.data
  } catch (error) {
    console.log(error)
  }
})

const initialState: AuthState = {
  user: [],
  isAuthenticated: false,
  status: "idle",
  error: null,
  token: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSession: (state, action) => {
      state.token = action.payload
    },
    removeSession: (state) => {
      state.token = null
      localStorage.removeItem("token")
      window.location.reload()
      state.isAuthenticated = false
    },
  },

  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.status = "loading"
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.user = action.payload
        console.log("register token", state.token)
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.payload as string
      })

      // Login
      .addCase(loginUser.pending, (state) => {
        state.status = "loading"
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true
        state.status = "succeeded"
        state.token = action.payload
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.payload as string
      })

      // Get User
      .addCase(getUser.pending, (state) => {
        state.status = "loading"
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.user = action.payload
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.payload as string
      })
  },
})

export const { setSession, removeSession } = authSlice.actions
export default authSlice.reducer
