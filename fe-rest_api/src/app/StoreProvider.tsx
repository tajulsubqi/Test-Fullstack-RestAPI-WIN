"use client"
import { AppStore, makeStore } from "@/libs/store"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useRef } from "react"
import { Provider } from "react-redux"

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }

  const queryClient = new QueryClient()

  return (
    <Provider store={storeRef.current}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  )
}
