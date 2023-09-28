import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate()

    useEffect(() => {
       const backToHomePage = setTimeout(() => {
            navigate("/")
        }, 3000)
        return () => {
            clearTimeout(backToHomePage)
        }
    }, [])

    navigate("/add-user")
  return (
    <div>
        <h2>Error: 404</h2>
        <p>Page not found</p>
    </div>
  )
}

export default NotFound