import { BsFileImage } from "react-icons/bs"

interface Props {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
}

const ImageUpload = ({ onChange, value }: Props) => {
  return (
    <div className="flex w-full flex-col items-center justify-center mt-4">
      <label htmlFor="image" className="cursor-pointer">
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={onChange}
          value={value}
          className="hidden w-full"
        />

        <div className="border text-gray-500 border-gray-300 bg-slate-100 rounded-lg p-2 flex items-center justify-center">
          <BsFileImage className="mr-2" /> Add Image
        </div>
      </label>
    </div>
  )
}

export default ImageUpload
