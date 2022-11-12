import React, { useState, useEffect } from 'react'
import { getAbout } from '../../api/about'
import parser from 'html-react-parser'
import { Link } from 'react-router-dom'
// import Loader from '../components/Loader';
// import ErrorMessage from '../components/ErrorMessage';

const Omstrøm = () => {

  const [ error, setError ] = useState( false );
  const [ loading, setLoading ] = useState( false );
  const [ about, setAbout ] = useState()

  useEffect( () => {
    setLoading( true )
    getAbout()
      .then( ( aboutdata ) => {
        setAbout( aboutdata.data )
        setError( false )
      } )
      .catch( ( err ) => {
        setError( true )
        setAbout()
      } )
      .finally( () => {
        setLoading( false )
      } )
  }, [] )

  return (
    <div className='OmStroem'>
      {
        about &&
        <article>
          <h1>{ parser( about.title ) }</h1>
          <article><p>{ about.teaser }</p></article>
        </article>
      }
      <br />
      <Link to="/omos">
        <button>LÆS MERE</button>
      </Link>

    </div>
  )
}

export default Omstrøm