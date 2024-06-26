import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import StoreProvider from "./StoreProvider"
import { Toaster } from "react-hot-toast"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: "Test Rest API",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Toaster
          toastOptions={{
            style: {
              background: "rgb(51, 65, 85)",
              color: "#fff",
            },
          }}
        />
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  )
}
