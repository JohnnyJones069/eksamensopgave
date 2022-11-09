import React, { useState, useEffect } from 'react'
import { getAllNews } from '../../api/news';
import { Link } from 'react-router-dom';


const SidsteNyt = () => {

    const [ error, setError ] = useState( false );
    const [ loading, setLoading ] = useState( false );
    const [ news, setNews ] = useState()

    useEffect( () => {
        setLoading( true )
        getAllNews()
            .then( ( newsdata ) => {
                setNews( newsdata.data )
                setError( false )
            } )
            .catch( ( err ) => {
                setError( true )
                setNews()
            } )
            .finally( () => {
                setLoading( false )
            } )
    }, [] )


    return (
        <div className='SidsteNyt'>
            <div className='SidsteNytHeadline'>
                <h2>Sidste <span className='orange'>Nyt</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit unde aliquam quis.</p>
            </div>
            <div className='NewsDisplay'>
                { news && news.slice(0,3).map( ( n, i ) =>
                    <div className="SidsteNytBox" key={ i }>
                        <div className="SidsteNytOverlay">
                            <img src={ "http://localhost:5333/images/news/" + n.image } />
                            <div className="bookmark">
                                <span className="bookmarkleft"></span>
                                <span className="bookmarkright"></span>
                                <span className="bookmarkday">{ new Date( n.received ).toLocaleDateString( "da", { day: "numeric" } ) }</span>
                                <span className="bookmarkmonth">{ new Date( n.received ).toLocaleDateString( "da", { month: "short" } ) }</span>
                            </div>
                        </div>
                        <article className="SidsteNytText">
                        <h3>{n.title}</h3>
                        <p>{n.content.slice(0,150)}...</p>
                        </article>
                    </div>
                )
                }
            </div>
            <Link to={"/nyheder"}>
            <button>FLERE NYHEDER...</button>
            </Link>

            <div className='bookmark'>
                <span className='bookmarkleft'></span>
                <span className='bookmarkright'></span>
                <span className='bookmarkbottom'></span>
                <div className="bookmarkdate">

                </div>
            </div>
        </div>
    )
}

export default SidsteNyt