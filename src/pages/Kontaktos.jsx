import React, { useState, useEffect, Component} from 'react'
import Breadcrumbs from '../layout/components/Breadcrumbs';
import { getContactInformation } from '../api/contactinformation'
import { IoLocationSharp, IoTimeOutline } from 'react-icons/io5';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi'


const listItems = [
  { title: 'Forside', link: '/' },
  { title: 'Kontakt os', link: '' }

]

const Kontaktos = () => {

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
              <div className="info">
                <h4>Adresse</h4>
                <p>{ contactinformation.address }, { contactinformation.zipcity }</p>
              </div>
            }
          </div>
          <div className="infobox">
            <div className="icon">
              <BsFillTelephoneFill color='#ff6600ff' style={ { fontSize: "20px" } } />
            </div>
            { contactinformation &&
              <div className="info">
                <h4>Telefon</h4>
                <p>{ contactinformation.phone }</p>
              </div>
            }
          </div>
          <div className="infobox">
            <div className="icon">
              <HiMail color='#ff6600ff' />
            </div>
            { contactinformation &&
              <div className="info">
                <h4>Email</h4>
                <p>{ contactinformation.email }</p>
              </div>
            }
          </div>
        </div>
      </div>
      <div className="Kontaktosbox">
        <div className="submitbesked"></div>
        <div className="kort">
        </div>
      </div>
    </div>
  )
}

export default Kontaktos