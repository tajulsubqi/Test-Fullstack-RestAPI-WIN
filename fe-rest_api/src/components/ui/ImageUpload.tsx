import useImageUpload from "@/hooks/useImageUpload"
import Image from "next/image"
import { FaCloudUploadAlt } from "react-icons/fa"

const ImageUpload = ({ onChange }: { onChange: (image: File) => void }) => {
  const { image, imagePreview, handleImageChange } = useImageUpload({ onChange })

  return (
    <div className="flex flex-col items-center">
      <label
        htmlFor="image"
        className="relative cursor-pointer flex flex-col items-center justify-center border-2 p-1 w-1/4 border-dashed border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300"
      >
        <FaCloudUploadAlt className="text-4xl text-gray-400" />
        <span className="text-sm leading-normal text-gray-500">Upload Image</span>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </label>
      {image && (
        <div className="mt-4">
          <Image
            width={200}
            height={200}
            src={imagePreview}
            alt="Preview"
            className="rounded-lg w-36 h-36 object-cover"
          />
        </div>
      )}
    </div>
  )
}

export default ImageUpload
