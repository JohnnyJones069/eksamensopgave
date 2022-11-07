import React, { useState, useEffect } from 'react'
import { getService } from '../../api/service'
import handylady from '../assets/img/handylady.png'

const VoresServices = () => {

    const [ error, setError ] = useState( false );
    const [ loading, setLoading ] = useState( false );
    const [ service, setService ] = useState()

    useEffect( () => {
        setLoading( true )
        getService()
            .then( ( servicedata ) => {
                console.log( servicedata )
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
    return (
        <div className='Overdiv'>
            <div className='VoresServices'>
                <div className="Service">
                    <div className='VoresServiceHeader'>
                        <h1>Vores <span className='orange'>Services</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime pariatur impedit expedita!</p>
                    </div>
                    { service && service.map( ( s, i ) =>
                        <div className='serviceinfodiv'>
                            <div className="serviceinfo" key={ i }>
                                <span className={ s.icon }></span>
                                <div className='serviceinfotext'>
                                    <h2>{ s.title }</h2>
                                <p>{ s.teaser }</p>
                                </div>
                            </div>
                        </div>
                    )
                    }
                </div>

                <div className="serviceimg">
                    <img src={ handylady } />
                </div>
            </div>
            <div className='BookServiceNu'>
                <div className="text">
                    <h3 className='orange'>Book</h3>
                    <h3>Service nu</h3>
                </div>
                <input type="text" name='navn' defaultValue="Dit navn" />
                <input type="email" name='email' defaultValue="Din Email" />
                <input type="text" name='number' defaultValue="Dit nummer" />
                <button>Send</button>
            </div>
        </div>
    )
}

export default VoresServices