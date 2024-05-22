import Link from "next/link"
import { GrTableAdd } from "react-icons/gr"
import { IoHome } from "react-icons/io5"
import profile from "../../public/assets/profile.png"
import Image from "next/image"
import { jwtDecode } from "jwt-decode"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface Session {
  email: string
  password: string
  name: string
  id: number
}

const Sidebar = () => {
  const router = useRouter()

  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token")
      if (token) {
        const decodedSession = jwtDecode<Session>(token)
        setSession(decodedSession)
      }
    }
  }, [])

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token")
      setSession(null)
      router.push("/auth/login")
    }
  }

  return (
    <div className="h-screen sticky top-0 flex overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <div className="w-72 flex flex-col bg-gray-800">
        <div className="h-16 flex justify-center items-center bg-gray-900">
          <span className="text-white text-xl mr-6 font-semibold">Sidebar</span>
        </div>

        <nav className="mt-10 px-4">
          <div className="flex gap-1 flex-col ">
            <Link
              href="/home"
              className="flex items-center gap-2 py-2 px-4 text-base rounded-md text-gray-200 hover:bg-gray-700 "
            >
              <IoHome size={25} color="white" /> Home
            </Link>

            <Link
              href="/add-product"
              className="flex items-center gap-2 py-2 px-4 text-base rounded-md text-gray-200 hover:bg-gray-700"
            >
              <GrTableAdd size={20} color="white" /> Add product
            </Link>
          </div>
        </nav>

        <div className="mt-auto p-5 flex items-center gap-3" />
        <div className="flex flex-col items-center">
          {session ? (
            <>
              <div className="flex items-center gap-3">
                <Image
                  src={profile}
                  width={40}
                  height={40}
                  alt="user"
                  className="rounded-full"
                />
                <div>
                  <p className="text-white">{session.name}</p>
                  <p className="text-gray-400 text-sm">{session.email}</p>
                </div>
              </div>
              <div className="w-full px-4 mb-5 mt-1">
                <button
                  onClick={handleLogout}
                  className="w-full text-white text-sm bg-red-500 hover:bg-red-600 px-3 py-2 font-semibold mt-3 rounded-md"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <div className="w-full px-4 mb-5">
              <Link href="/auth/login">
                <button className="w-full text-white text-sm bg-sky-500 hover:bg-sky-600 font-semibold px-3 py-2 mt-2 rounded-md">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
