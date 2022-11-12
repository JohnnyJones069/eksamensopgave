import React, { useState, useEffect } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { FaComments } from 'react-icons/fa';
import { IoIosCreate } from 'react-icons/io';
import Loader from '../../components/Loader';
import parser from 'html-react-parser';
import { Link } from 'react-router-dom';

import {getAllNews, deleteNews } from '../../../api/news';

const AdminNyheder = () => {

  const [ error, setError ] = useState( false );
  const [ loading, setLoading ] = useState( false );
  const [ news, setNews ] = useState();

  const [ message, setMessage ] = useState();

  useEffect( () => {
    setLoading( true )
    getAllNews()
      .then( ( newsdata ) => {
        setNews( newsdata.data )
      } )
      .catch( ( err ) => {
        setError( true )
      } )
      .finally( () => {
        setLoading( false )
      } )
  }, [] )

  const handleDelete = ( id, title ) => {

    if ( window.confirm( "Er du sikker på at du vil slette denne Nyhed?" ) ) {

      setLoading( true )
      deleteNews( id )
        .then( ( toursdata ) => {
          setMessage( "Nyheden: " + title +  " er blevet slettet")

        } )
        .catch( ( err ) => {
          setError( true )
          // console.log( err )
        } )
        .finally( () => {
          setLoading( false )
        } )
    }
  }




  return (
    <div className='AdminNews'>
      <div className='topPage'>
        <h1 className='headline'>Her er oversigten over dine Nyheder</h1>
        {/* Tjek med Marianne om hvad der kan gøres med Linket */}
        
        <Link to="/admin/adminnyhedopret" className="create">
          <IoIosCreate size='2em' color='black' title='Create button' />
        </Link>
      </div>
      { message && <h2>{ message }</h2> }
        { loading && <Loader /> }
        { error && <h2>Error...</h2> }
      <div className='card-container'>
        {
          news && news.map( n =>
            <article className='card' key={ n._id }>
              <h2>{ n.title }</h2>
              <br />
              <p>{ n.content }</p>
              <br />
              <p>{ new Date( n.received ).toLocaleDateString( "da", { day: "numeric", month: "long", year: "numeric" } ) }</p>
              <br />
              <p><FaComments /> { n.comments.length } kommentarer</p>

              <div className='editdeletebut'>
                <AiFillDelete className="delete" size='2em' color='red' title='Delete button' onClick={ () => handleDelete( n._id, n.title ) } />
                <Link to={ "/admin/adminnyhedret/" + n._id }>
                  <AiFillEdit size='2em' color='green' title='Edit button' />
                </Link>

              </div>
            </article>
          )
        }
      </div>
    </div>
  )
}

export default AdminNyheder