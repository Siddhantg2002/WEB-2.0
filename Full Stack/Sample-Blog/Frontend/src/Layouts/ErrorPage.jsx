import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <>
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <Link to={'/'}>Go back</Link>
    </>
  )
}

export default ErrorPage