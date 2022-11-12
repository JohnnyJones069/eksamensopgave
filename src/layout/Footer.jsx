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
        // console.log( err )
      } )
      .finally( () => {
        setLoading( false )
      } )

  }

  return (
    <footer className='Footer'>
      <div className="footerinfo">
        <div className="footerabout">
          <img src={ logo } alt='Strøm logo' />
          <p>Som medlem af Elinstallatørernes Landsorganisation, ELFO, er vi tilsluttet et ankerværn og en garantiordning</p>
        </div>
        <ul className="footerlinks">
          <h3>Link</h3>
          <Link to="faq"><FaAngleRight />FAQ</Link>
          <Link to="omos"> <FaAngleRight />Om os</Link>
          <Link to="kontaktos"><FaAngleRight />Kontakt os</Link>
          <Link to="service"><FaAngleRight />Services</Link>
        </ul>
        { contactinformation &&
          <article className="footerkontakt">
            <h3>Kontakt os</h3>
            <article>
              <p><b>Adresse:</b> { contactinformation.address }{ contactinformation.zipcity }</p>
            </article>
            <p><b>Telefon:</b> { contactinformation.phone }</p>
            <p><b>Email:</b> { contactinformation.email }</p>
            <p><b>CVR :</b> { contactinformation.cvr }</p>
          </article>
        }
        <article className="footernyhedsbrev">
          <h3>Nyhedsbrev</h3>
          <p>Tilmeld dig vores Nyhedsbrev her</p>
          <form onSubmit={ handleSubmit }>
            <div className="tilmeld">
              <input type="email" name='email' placeholder='Din Email' />
              <button type='submit'>TILMELD</button>
            </div>
          </form>
        </article>
      </div>
      <div className="footerinfobottom">
        <p><span>Strøm</span> &copy; 2017 All Rights Reserved</p>

        <ul className="footersocial">
          {/* { contactinformation && */ }
          <Link to="https://facebook/stroem-grenaa"><div className='socialmediaicon'><FaFacebookF /></div></Link>
          <Link to="https://twitter.com/stroem-grenaa"><div className='socialmediaicon'><FaTwitter /></div></Link>
          <Link to="https://vimeo.com/stroem-grenaa"><div className='socialmediaicon'><FaVine /></div></Link>
          <Link to="https://linkedin.com/stroem-grenaa"><div className='socialmediaicon'><FaLinkedinIn /></div></Link>
          {/* } */ }
        </ul>
      </div>
    </footer>
  )
}

export default Footer