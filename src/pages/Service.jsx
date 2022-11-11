import React, { useState, useEffect } from 'react'
import Breadcrumbs from '../layout/components/Breadcrumbs';
import VaelServiceInfo from '../layout/components/VaelServiceInfo';
import { getService } from '../api/service';
import { FaLongArrowAltRight } from 'react-icons/fa'


const listItems = [
    { title: 'Forside', link: '/' },
    { title: 'Services', link: '' }

]


const Service = () => {

    const [ service, setService ] = useState()
    const [ error, setError ] = useState( false );
    const [ loading, setLoading ] = useState( false );

    // Til styring af at vise Service content
    const [ activeService, setActiveService ] = useState(1)
    const [ showServiceContent, setshowServiceContent ] = useState(1)

    useEffect( () => {
        setLoading( true )

        getService()
            .then( ( response ) => {
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
    }, [] )

    const handleActive = (key, id) => {
        if ( key === activeService ) {
            setActiveService( -1 );
            return
        }
        setActiveService( key )
        setshowServiceContent( id )
    }

    return (
        <div>
            <div className="breadcrumbsdiv">
                <Breadcrumbs list={ listItems } />
            </div>
            <div className="service">
                <div className="vaelservice">
                    { service && service.map((s, k) =>
                        <div className={activeService == k ? "vaelgservicebox active" : "vaelgservicebox"}  key={ s._id } onClick={ () => handleActive( k, s._id ) } style={ { cursor: "pointer" } }>
                            <h3>{ s.title } <FaLongArrowAltRight /></h3>
                        </div>
                    )
                    }
                </div>
                <div className="vaelserviceinfo">
                    { showServiceContent && <VaelServiceInfo contentId={ showServiceContent } type={activeService} /> }
                </div>
            </div>
        </div>
    )
}

export default Service