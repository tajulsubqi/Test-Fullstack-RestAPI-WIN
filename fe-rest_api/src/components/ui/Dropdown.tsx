"use client"
import { useState } from "react"

const Dropdown = ({ onChange }: { onChange: (value: string) => void }) => {
  const [selectedGender, setSelectedGender] = useState("")

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value
    setSelectedGender(selectedValue)
    onChange(selectedValue) // Memanggil fungsi onChange yang diberikan oleh komponen induk
  }

  return (
    <div>
      <label htmlFor="">Gender</label>
      <select
        value={selectedGender}
        onChange={handleGenderChange}
        className="block w-full px-4 py-2 border border-slate-400 text-sm font-medium text-slate-500 bg-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
      >
        <option value="">Select Gender</option>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
    </div>
  )
}

export default Dropdown
