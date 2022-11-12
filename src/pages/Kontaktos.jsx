import React, { useState, useEffect, Component } from 'react'
import Breadcrumbs from '../layout/components/Breadcrumbs';
import { getContactInformation } from '../api/contactinformation'
import { IoLocationSharp, IoTimeOutline } from 'react-icons/io5';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi'
import { createContact } from '../api/contact'



const listItems = [
  { title: 'Forside', link: '/' },
  { title: 'Kontakt os', link: '' }

]

const Kontaktos = () => {

  const [ error, setError ] = useState( false );
  const [ loading, setLoading ] = useState( false );
  const [ contactinformation, setContactinformation ] = useState()

  const [ contact, setContact ] = useState()
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
    createContact( formData )
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
    <div>
      <div className="breadcrumbsdiv">
        <Breadcrumbs list={ listItems } />
      </div>
      <div className='Kontakt'>
        <div className="omosinfo">
          <div className="infobox">
            <div className="icon">
              <IoLocationSharp color='#ff6600ff' />
            </div>
            { contactinformation &&
              <article className="info">
                <h4>Adresse</h4>
                <p>{ contactinformation.address }, { contactinformation.zipcity }</p>
              </article>
            }
          </div>
          <div className="infobox">
            <div className="icon">
              <BsFillTelephoneFill color='#ff6600ff' style={ { fontSize: "20px" } } />
            </div>
            { contactinformation &&
              <article className="info">
                <h4>Telefon</h4>
                <p>{ contactinformation.phone }</p>
              </article>
            }
          </div>
          <div className="infobox">
            <div className="icon">
              <HiMail color='#ff6600ff' />
            </div>
            { contactinformation &&
              <article className="info">
                <h4>Email</h4>
                <p>{ contactinformation.email }</p>
              </article>
            }
          </div>
        </div>
      </div>
      <div className="Kontaktosbox">
        <div className="submitbesked">
          <h2>Kontakt os</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vel nulla dolorum repudiandae sapiente, quam asperiores eligendi provident obcaecati iste?</p>
          <form onSubmit={ handleSubmit }>
            <div className="kontaktformular">
              <div className="basikinfo">
                <input type="text" name='name' placeholder="Dit navn" />
                <input type="email" name='email' placeholder="Din email" />
                <input type="text" name='phone' placeholder="Dit nummer" />
              </div>
              <div className="kontaktbesked">
                <textarea name='message' placeholder="Din besked" />
              </div>
            </div>
            <button className='kontaktbutton' type='submit'>SEND BESKED</button>
          </form>

        </div>
        <iframe className='kort' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2207.6740631988114!2d10.884626316065669!3d56.404442549011634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464dd5b11ea53dcf%3A0xd84e314868425f52!2s3D%20College!5e0!3m2!1sda!2sdk!4v1667993156361!5m2!1sda!2sdk" allow="accelerometer"></iframe>
      </div>
    </div>
  )
}

export default Kontaktos