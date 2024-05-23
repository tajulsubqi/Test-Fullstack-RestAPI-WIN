import { SessionType } from "@/types/sessionType"
import { jwtDecode } from "jwt-decode"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const useSidebar = () => {
  const router = useRouter()
  const [session, setSession] = useState<SessionType | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token")
      if (token) {
        const decodedSession = jwtDecode<SessionType>(token)
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

  return {
    session,
    handleLogout,
  }
}

export default useSidebar
