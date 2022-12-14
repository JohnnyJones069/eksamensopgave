import React, { useState, useEffect } from 'react'
import { getService } from '../../api/service'
import { createBooking } from '../../api/booking'
import handylady from '../assets/img/handylady.png'

const VoresServices = () => {

    const [ error, setError ] = useState( false );
    const [ loading, setLoading ] = useState( false );
    const [ service, setService ] = useState()

    const [ content, setContent ] = useState()
    const [ message, setMessage ] = useState()

    useEffect( () => {
        setLoading( true )
        getService()
            .then( ( servicedata ) => {
                setService( servicedata?.data )
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


    const handleSubmit = ( e ) => {
        e.preventDefault() // Forhindre reload af side
        setLoading( true )

        let formData = new FormData( e.target )
        formData.append( "content", content );
        createBooking( formData )
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
        <div className='Overdiv'>
            <div className='VoresServices'>
                <article className='VoresServiceHeader'>
                    <h1>Vores <span className='orange'>Services</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime pariatur impedit expedita!</p>
                    <div className="litleicon">
                        <span className="line"></span>
                        <span className='circle'></span>
                        <span className='line'></span>
                    </div>
                </article>

                { service && service.map( ( s, i ) =>
                    <div className="VoresServicesdiv" key={ i }>
                        <span className={ s.icon }></span>
                        <article className="serviceinfotext">
                            <h2>{ s.title }</h2>
                            <p>{ s.teaser }</p>
                        </article>
                    </div>
                )

                }

                <div className="serviceimg">
                    <img src={ handylady } alt="Handy lady billed"/>
                </div>
            </div>
            <div className='BookServiceNu'>
                <article className="text">
                    <h3 className='orange'>Book</h3>
                    <h3>Service nu</h3>
                </article>
                <form className='submitbooking' onSubmit={ handleSubmit }>

                    <input type="text" name='name' placeholder="Dit navn" />
                    <input type="email" name='email' placeholder="Din Email" />
                    <input type="nummer" name='phone' placeholder="Dit nummer" />
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default VoresServices