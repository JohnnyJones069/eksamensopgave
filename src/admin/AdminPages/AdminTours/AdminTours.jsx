import React, { useState, useEffect } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { IoIosCreate } from 'react-icons/io';
import Loader from '../../components/Loader';
import parser from 'html-react-parser';
import { Link } from 'react-router-dom';

import { deleteTour, getAllTours } from '../../../api/tour';

const AdminTours = () => {

  const [ error, setError ] = useState( false );
  const [ loading, setLoading ] = useState( false );
  const [ tours, setTours ] = useState();

  const [ message, setMessage ] = useState();

  useEffect( () => {
    setLoading( true )
    getAllTours()
      .then( ( toursdata ) => {
        setTours( toursdata.data )
      } )
      .catch( ( err ) => {
        setError( true )
      } )
      .finally( () => {
        setLoading( false )
      } )
  }, [] )

  const handleDelete = ( id, title ) => {

    if ( window.confirm( "Er du sikker på at du vil slette denne tur?" ) ) {

      setLoading( true )
      deleteTour( id )
        .then( ( toursdata ) => {
          setMessage( "Tour med id'en " + title + " (" + id + ") er nu slettet" )

        } )
        .catch( ( err ) => {
          setError( true )
          console.log( err )
        } )
        .finally( () => {
          setLoading( false )
        } )
    }
  }




  return (
    <div className='AdminTours'>
      <div className='topPage'>
        <h1>Her er oversigten over dine ture</h1>
        <Link className="create" to="admintoursopret">
          <IoIosCreate size='2em' color='black' title='Create button' />
        </Link>
      </div>
      <div className='card-container'>
        { message && <h2>{ message }</h2> }
        { loading && <Loader /> }
        { error && <h2>Error...</h2> }
        {
          tours && tours.map( t =>
            <div className='card' key={ t._id }>
              <h2>{ t.title }</h2>
              <br />
              <p>{ new Date( t.traveldate ).toLocaleDateString( "da", { day: "numeric", month: "long", year: "numeric" } ) }</p>
              <br />
              <p>{ t.teaser }</p>
              <br />
              <div>{ parser( t.content ) }</div>

              <div className='editdeletebut'>
                <AiFillDelete className="delete" size='2em' color='red' title='Delete button' onClick={ () => handleDelete( t._id, t.title ) } />
                <Link to={ "/admin/admintoursret/" + t._id }>
                  <AiFillEdit size='2em' color='green' title='Edit button' />
                </Link>

              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default AdminTours