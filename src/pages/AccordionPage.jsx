import React, { useState, useEffect } from 'react'
import Breadcrumbs from '../layout/components/Breadcrumbs';
import { getAccordionData } from '../api/accordiondata'
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri'

const listItems = [
    { title: 'Forside', link: '/' },
    { title: 'Faq', link: '' }

]

const AccordionPage = () => {
    const [ error, setError ] = useState( false );
    const [ loading, setLoading ] = useState( false );
    const [ accordionInfo, setAccordionInfo ] = useState();

    const [ accordion, setActiveAccordion ] = useState( 1 )

    useEffect( () => {
        setLoading( true )
        getAccordionData()
            .then( ( aacordiondata ) => {
                setAccordionInfo( aacordiondata.data )
                setError( false )
            } )
            .catch( ( err ) => {
                setError( true )
                setAccordionInfo()
            } )
            .finally( () => {
                setLoading( false )
            } )
    }, [] )

    const handleAccordion = ( i ) => {
        if ( i === accordion ) {
            setActiveAccordion( -1 );
            return
        }
        setActiveAccordion( i )
    }

    return (
        <>
            <div className="breadcrumbsdiv">
                <Breadcrumbs list={ listItems } />
            </div>
            <div className="Accordion-container">
                <div className="accordion-faq">
                    { accordionInfo && accordionInfo.map( ( f, i ) =>
                        <div key={ i } onClick={ () => handleAccordion( i ) }>
                            <div className="accordion-faq-card" key={ i }>
                                <section className={ accordion === i ? "active" : "" }>
                                    <h4>{ f.question }</h4>
                                    <div>
                                        { accordion === i ? ( <><span className=' verticle'><RiArrowUpSLine /></span></> ) : ( <><span className=' verticle'><RiArrowDownSLine /></span></> ) }
                                    </div>
                                </section>
                                <article className={ accordion === i ? "active" : "inactive" }>
                                    <p className={ accordion === i ? "active" : "inactive" }>{ f.answer }</p>
                                </article>
                            </div>
                        </div>
                    )
                    }
                </div>
            </div>
        </>
    )
}

export default AccordionPage