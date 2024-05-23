import React, { useState, useEffect } from "react"

const useImageUpload = ({ onChange }: { onChange: (image: File) => void }) => {
  const [image, setImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string>("")

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview)
      }
    }
  }, [imagePreview])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files ? e.target.files[0] : null
    setImage(selectedImage)
    if (selectedImage) {
      const previewUrl = URL.createObjectURL(selectedImage)
      setImagePreview(previewUrl)
      onChange(selectedImage)
    } else {
      setImagePreview("")
    }
  }

  return {
    image,
    imagePreview,
    handleImageChange,
  }
}

export default useImageUpload
