import React, { useState, useEffect } from 'react'
import { getAllNews } from '../../api/news';
import { GoCalendar } from 'react-icons/go'
import { Link } from 'react-router-dom';



const AsideComponent = () => {

    const [ error, setError ] = useState( false );
    const [ loading, setLoading ] = useState( false );
    const [ news, setNews ] = useState();

    const [ itemsPerPage, setItemsPerPage ] = useState( 4 )
    const [ currentPage, setCurrentPage ] = useState( 0 ) //Vis side 1 = index 0

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
        <div>
            <aside>
                <h3>Arkiv</h3>
                { news && news.map( ( n, i ) =>
                    <div>
                        <Link to={ "/nyheder/" + n._id } className='normaltext'>
                            <div className='asidecomponents' key={ i }>
                                <img src={ "http://localhost:5333/images/news/" + n.image } />
                                <div className='txt' key={ i }>
                                    { n.title }
                                    <div className="date" key={ i }>
                                        <GoCalendar />
                                        { new Date( n.received ).toLocaleDateString( "en-GB", { day: "2-digit", month: "short", year: "numeric" } ) }
                                    </div>
                                </div>

                            </div>
                        </Link>
                        <hr style={ { color: "#789", backgroundColor: "#789" } } />
                    </div>

                ).reverse().slice( 4, ) }
            </aside>
        </div>
    )
}

export default AsideComponent