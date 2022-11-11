import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/img/logo.png'
import { FaVine, FaLinkedinIn, FaTwitter, FaFacebookF, FaAngleRight } from 'react-icons/fa'
import { getContactInformation } from '../api/contactinformation'
import { createNewssubscription } from '../api/emailsubscription'

const Footer = () => {

  const [ error, setError ] = useState( false );
  const [ loading, setLoading ] = useState( false );
  const [ contactinformation, setContactinformation ] = useState()
  const [ content, setContent ] = useState()
  const [ message, setMessage ] = useState()



  useEffect( () => {
    setLoading( true )
    getContactInformation()
      .then( ( contactinformationdata ) => {
        setContactinformation( contactinformationdata.data )
        setError( false )
      } )
      .catch( ( err ) => {
        setError( true )
        setContactinformation()
      } )
      .finally( () => {
        setLoading( false )
      } )
  }, [] )

  const handleSubmit = ( e ) => {
    e.preventDefault() // Forhindre reload af side
    setLoading( true )

    let formData = new FormData( e.target )
    formData.append( "content", content );
    createNewssubscription( formData )
      .then( ( response ) => {
        e.target.reset() // Tømmere formularfelterne
        // setMessage( "ny tur er oprettet! id nummer: " + response.data._id )

      } )
      .catch( ( err ) => {
        setError( true )
        console.log( err )
      } )
      .finally( () => {
        setLoading( false )
      } )

  }

  return (
    <div className='Footer'>
      <div className="footerinfo">
        <div className="footerabout">
          <img src={ logo } />
          <p>Som medlem af Elinstallatørernes Landsorganisation, ELFO, er vi tilsluttet et ankerværn og en garantiordning</p>
        </div>
        <div className="footerlinks">
          <h4>Link</h4>
          <Link to="faq"><FaAngleRight />FAQ</Link>
          <Link to="omos"> <FaAngleRight />Om os</Link>
          <Link to="kontaktos"><FaAngleRight />Kontakt os</Link>
          <Link to="service"><FaAngleRight />Services</Link>
        </div>
        { contactinformation &&
          <div className="footerkontakt">
            <h4>Kontakt os</h4>
            <div>
              <p><b>Adresse:</b> { contactinformation.address }{ contactinformation.zipcity }</p>
            </div>
            <p><b>Telefon:</b> { contactinformation.phone }</p>
            <p><b>Email:</b> { contactinformation.email }</p>
            <p><b>CVR :</b> { contactinformation.cvr }</p>
          </div>
        }
        <div className="footernyhedsbrev">
          <h4>Nyhedsbrev</h4>
          <p>Tilmeld dig vores Nyhedsbrev her</p>
          <form onSubmit={ handleSubmit }>
            <div className="tilmeld">
              <input type="email" name='email' placeholder='Din Email' />
              <button type='submit'>TILMELD</button>
            </div>
          </form>
        </div>
      </div>
      <div className="footerinfobottom">
        <p><span>Strøm</span> &copy; 2017 All Rights Reserved</p>

        <div className="footersocial">
          {/* { contactinformation && */ }
          <Link to="https://facebook/stroem-grenaa"><div className='socialmediaicon'><FaFacebookF /></div></Link>
          <Link to="https://twitter.com/stroem-grenaa"><div className='socialmediaicon'><FaTwitter /></div></Link>
          <Link to="https://vimeo.com/stroem-grenaa"><div className='socialmediaicon'><FaVine /></div></Link>
          <Link to="https://linkedin.com/stroem-grenaa"><div className='socialmediaicon'><FaLinkedinIn /></div></Link>
          {/* } */ }
        </div>
      </div>
    </div>
  )
}

export default Footer