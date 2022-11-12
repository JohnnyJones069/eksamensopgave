import React, { useState, useEffect } from 'react'
import ErrorMessage from '../../components/ErrorMessage'
import Loader from '../../components/Loader'
import { getBookingByID, editBooking } from "../../../api/booking";
import 'react-quill/dist/quill.snow.css';
import MessageBox from '../../components/MessageBox'
import { useParams } from 'react-router-dom'


const AdminBookingRet = () => {

  const { ID } = useParams()


  const [ booking, setBooking ] = useState()
  const [ error, setError ] = useState( false )
  const [ loading, setLoading ] = useState( false )
  const [ message, setMessage ] = useState()
  const [accept, setAccept] = useState()


  useEffect( () => {
    setLoading( true )
    getBookingByID(ID)
      .then( ( response ) => {
        setBooking( response.data )
        setAccept( response.data.accept )
        setError( false )
      } )
      .catch( ( err ) => {
        setError( err )
        setBooking()
      } )
      .finally( () => {
        setLoading( false )
      } )

  }, [ ] )

  const handleAccept = e => {
    console.log(e.target.value)
    if (e.target.value === "true") {
      setAccept(false)
    } else {
      setAccept(true)
    }
    console.log(accept)
  }

  const handleSubmit = ( e ) => {
    e.preventDefault()

    setLoading( true )

    
    let formData = new FormData( e.target )

    editBooking( formData, ID )
    .then( ( response ) => {
      console.log( response.data )
      setMessage( "Booking er rettet" )
      
      } )
      .catch( ( err ) => {
        setError( true )
        console.log( err )
      } )
      .finally( () => {
        setLoading( false )
        // window.scrollTo( 0, 0 ) // Scroll to top of page
      } )

  }

  return (
    <div>
      <h1>Ret Booking segmentet</h1>
      { error && <ErrorMessage /> }
      { loading && <Loader /> }
      { message && <MessageBox messagetitle={ message } emptyMessage={ setMessage } /> }

      { booking && <div className='AdminOverwatch'>
        <form onSubmit={ handleSubmit }>
          <div>
            <label htmlFor="inpName">Navn</label>
            <br />
            <input type="text" defaultValue={ booking.name } name="name" id="inpName" />
          </div>
          <div>
            <label htmlFor="inpEmail">Email</label>
            <br />
            <input type="email" defaultValue={ booking.email } name="email" id="inpEmail" />
          </div>
          <div>
            <label htmlFor="inpPhone">Telefon nummer</label>
            <br />
            <input type="number" defaultValue={ booking.phone } name="phone" id="inpPhone" />
          </div>
          <div>
            <label htmlFor="inpNote">Note</label>
            <br />
            <input type="text" defaultValue={ booking.note } name="note" id="inpNote" />
          </div>
          <div>
            <label htmlFor="inpAccept">Accepter?</label>
            <br />
            { accept === true && <input type="checkbox" defaultValue={ accept } onChange={ handleAccept } checked name="accept" id="inpAccept" /> }
            { accept === false && <input type="checkbox" defaultValue={ accept } onChange={ handleAccept } checked name="accept" id="inpAccept" /> }
          </div>
          <button type='submit'>Ret About segment</button>
        </form>
      </div>
      }

    </div>
  )
}

export default AdminBookingRet