import React, { useState } from "react"

const useAuth = () => {
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    password: "",
    gender: "",
  })

  const handleGenderChange = (gender: string) => {
    setFormData({ ...formData, gender })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return {
    formData,
    setFormData,
    handleGenderChange,
    handleChange,
  }
}

export default useAuth
