import React, {useState, useEffect} from 'react'
import logo from './assets/img/logo.png'
import { IoLocationSharp, IoTimeOutline } from 'react-icons/io5';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { getContactInformation } from '../api/contactinformation'

const Header = () => {

  const [ error, setError ] = useState( false );
  const [ loading, setLoading ] = useState( false );
  const [ contactinformation, setContactinformation ] = useState()

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



  return (
    <div className='Header'>
      <div className='Image'>
        <img src={ logo } alt='Strøm logo'/>
      </div>
      { contactinformation &&

        <div className='headerabout'>
          <article className="location">
            <IoLocationSharp color='#ff6600ff' />
            <p>{contactinformation.address}, {contactinformation.zipcity}</p>
          </article>
          <article className="openTime">
            < IoTimeOutline color='#ff6600ff' />
            <p>{contactinformation.openinghours}</p>
          </article>
          <article className="number">
            <BsFillTelephoneFill color='#ff6600ff' />
            <p>{contactinformation.phone}</p>
          </article>
        </div>
      }
    </div>
  )
}

export default Header