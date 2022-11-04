import React from 'react'
import { BiError } from 'react-icons/bi'
import { Link } from 'react-router-dom';


const NoMatch = () => {
  return (
    <div className='NoMatch'>
      <BiError size='5em' />
      <div className="nomatch-container">
        <h1>Error 404</h1>
        <h2>Denne side findes desværre ikke</h2>
        <h2>Prøv et andet link eller URL</h2>
        <Link to="/">
          <button to="/">Tilbage til forsiden</button>
        </Link>
      </div>
    </div>
  )
}

export default NoMatch