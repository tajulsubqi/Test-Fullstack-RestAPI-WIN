import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./features/product/productSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      app: productReducer,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
