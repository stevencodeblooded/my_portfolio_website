import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <div className="glitch-text" data-text="Page Not Found">Page Not Found</div>
        <p className="error-message">
          Oops! The page you're looking for seems to have wandered off into the digital wilderness.
        </p>
        <div className="error-details">
          <p>Here are a few things you can try:</p>
          <ul>
            <li>Check if the URL is correctly typed</li>
            <li>Go back to the previous page</li>
            <li>Start fresh from our homepage</li>
          </ul>
        </div>
        <Link to='/' className="home-button">
          Return to Homepage
        </Link>
      </div>
    </div>
  )
}

export default NotFound