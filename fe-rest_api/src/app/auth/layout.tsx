import React from "react"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen py-8 px-28 bg-slate-200 flex justify-center items-center">
      {children}
    </div>
  )
}

export default AuthLayout
