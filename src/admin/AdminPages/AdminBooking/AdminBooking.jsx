import React, { useState, useEffect } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { FaComments } from 'react-icons/fa';
import { IoIosCreate } from 'react-icons/io';
import Loader from '../../components/Loader';
import parser from 'html-react-parser';
import { Link } from 'react-router-dom';

import {getAllBooking, deleteBooking } from '../../../api/booking';

const AdminBooking = () => {

  const [ error, setError ] = useState( false );
  const [ loading, setLoading ] = useState( false );
  const [ booking, setBooking ] = useState();

  const [ message, setMessage ] = useState();

  useEffect( () => {
    setLoading( true )
    getAllBooking()
      .then( ( bookingdata ) => {
        setBooking (bookingdata.data )
      } )
      .catch( ( err ) => {
        setError( true )
      } )
      .finally( () => {
        setLoading( false )
      } )
  }, [] )

  const handleDelete = ( id, name ) => {

    if ( window.confirm( "Er du sikker på at du vil slette denne Booking?" ) ) {

      setLoading( true )
      deleteBooking( id )
        .then( ( bookingdata ) => {
          setMessage( "Booking tilhørende: " + name +  " er blevet slettet")

        } )
        .catch( ( err ) => {
          setError( true )
        } )
        .finally( () => {
          setLoading( false )
        } )
    }
  }




  return (
    <div className='AdminNews'>
      <div className='topPage'>
        <h1 className='headline'>Her er oversigten over dine bookings</h1>
        {/* Tjek med Marianne om hvad der kan gøres med Linket */}
      </div>
      { message && <h2>{ message }</h2> }
        { loading && <Loader /> }
        { error && <h2>Error...</h2> }
      <div className='card-container'>
        {
          booking && booking.map( b =>
            <article className='card' key={ b._id }>
              <h2>{ b.name }</h2>
              <br />
              <p>{ b.email }</p>
              <br />
              <p>{ b.phone }</p>
              <br />
              <p>{ b.note }</p>
              <br />
              <p>{ new Date( b.received ).toLocaleDateString( "da", { day: "numeric", month: "long", year: "numeric" } ) }</p>
              <br />
              <p>{b.accept === true ? "Denne booking er godkendt" : "Denne booking er ikke godkendt"}</p>
              <br />
              <p>{ b.received }</p>

              <div className='editdeletebut'>
                <AiFillDelete className="delete" size='2em' color='red' title='Delete button' onClick={ () => handleDelete( b._id, b.name ) } />
                <Link to={ "/admin/adminbookingret/" + b._id }>
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

export default AdminBooking