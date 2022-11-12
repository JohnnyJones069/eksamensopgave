import React, { useEffect, useState } from 'react'
import { getServiceID, getService } from '../../api/service';
import parser from 'html-react-parser';
import { Link } from 'react-router-dom';


const VaelServiceInfo = ( { contentId, type } ) => {

  const [ service, setService ] = useState()
  const [ loading, setLoading ] = useState( false )
  const [ error, setError ] = useState( false )

  useEffect( () => {
    setLoading( true )
    if ( contentId == 1 ) {
      getService()
        .then( response => {
          setService( response.data[ type ] )
          setError( false )
        } )
        .catch( ( err ) => {
          setError( true )
          setService()
        } )
        .finally( () => {
          setLoading( false )
        } )
    } else {
      getServiceID( contentId )
        .then( response => {
          setService( response.data )
          setError( false )
        } )
        .catch( ( err ) => {
          setError( true )
          setService()
        } )
        .finally( () => {
          setLoading( false )
        } )
    }



  }, [ contentId ] )

  return (
    <>
      <div>
        { service &&
          <div>
            <div className="vaelserviceImg">
              <div className="vaelgserviceimgbox">
                <img src={ "http://localhost:5333/images/service/" + service.image } alt="foto" width="100%" />
              </div>
              <div className="vaelservicetext">
                <h2>{ service.title }</h2>
                { parser( service.content ) }
              </div>
            </div>
          </div>

        }


      </div>

    </>
  )
}

export default VaelServiceInfo


