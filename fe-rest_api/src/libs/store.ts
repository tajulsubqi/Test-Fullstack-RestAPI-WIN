import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./features/product/productSlice"
import authReducer from "./features/auth/authSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      app: productReducer,
      auth: authReducer,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
