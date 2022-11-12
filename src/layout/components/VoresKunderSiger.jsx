import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import Carousel from 'nuka-carousel/lib/carousel';
import { getAllTestimonial } from '../../api/testimonial'


const VoresKunderSiger = () => {

    const [ error, setError ] = useState( false );
    const [ loading, setLoading ] = useState( false );
    const [ testimonial, setTestimonial ] = useState()

    useEffect( () => {
        setLoading( true )
        getAllTestimonial()
            .then( ( testimonialdata ) => {
                setTestimonial( testimonialdata.data )
                setError( false )
            } )
            .catch( ( err ) => {
                setError( true )
                setTestimonial()
            } )
            .finally( () => {
                setLoading( false )
            } )
    }, [] )

    function randomizeArray ( arr ) {
        for ( let i = arr.length - 1; i > 0; i-- ) {
            let j = Math.floor( Math.random() * ( i + 1 ) );
            let k = arr[ i ];
            arr[ i ] = arr[ j ];
            arr[ j ] = k;
        }
        return arr;
    }

    return (
        <div>
            <div className="banner">
                <div className="text">
                    <h1>Vores <span className='orange'>kunder siger</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis harum iure voluptates!</p>
                    <div className="litleicon">
                        <span className="line"></span>
                        <span className='circle'></span>
                        <span className='line'></span>
                    </div>
                </div>
                <Carousel wrapAround={ true } slidesToShow={ 3 } style={ { overflow: "hidden", paddingTop: "80px", alignContent: "center" } } renderBottomCenterControls="none" renderCenterLeftControls="none" renderCenterRightControls="none">
                    { testimonial && randomizeArray( testimonial ).slice( 0, 4 ).map( ( t, i ) =>
                        <div className='cardview' key={ i }>
                            <div className='card' key={ i }>
                                <img src={ "http://localhost:5333/images/testimonial/" + t.image } />
                                <h3>{ t.name }</h3>
                                <p className='title'>{ t.title }</p>
                                <p>{ t.review }</p>
                            </div>
                        </div>
                    )
                    }
                </Carousel>
            </div>
            <div className="whitecoloumn">

            </div>
        </div>
    )
}

export default VoresKunderSiger