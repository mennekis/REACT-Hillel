import React from 'react'
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>404 The page is not founded
      <div>
        <Link to='/'>Go to the HOME-Page</Link>
      </div>
    </div>
  )
}

export default PageNotFound