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
                { news && news.slice( 0, 4 ).map( ( n, i ) =>
                    <Link to={ "/nyheder/" + n._id } className='normaltext' key={ i }>
                        <div className='asidecomponents'>
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

                ) }
            </aside>
        </div>
    )
}

export default AsideComponent