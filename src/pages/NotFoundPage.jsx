import { useNavigate } from "react-router-dom"
import "../styles/notfound.css"

const NotFoundPage = () => {
    const navigate = useNavigate()
  return (
    <div className='not-found-page'>
        <h1>404</h1>
        <p>Page not Found</p>
        <hr />
        <button onClick={() => navigate("../")}>Return to Home Page</button>
    </div>
  )
}

export default NotFoundPage