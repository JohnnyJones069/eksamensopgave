import React, { useState, useEffect } from 'react'
import { getAllNews } from '../api/news';
import Pagination from '../layout/components/Pagination';
import Breadcrumbs from '../layout/components/Breadcrumbs';
import { GoCalendar } from 'react-icons/go'

const listItems = [
    { title: 'Forside', link: '/' },
    { title: 'Nyheder', link: '' }

]

const Tours = () => {

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
            <div className="breadcrumbsdiv">
                <Breadcrumbs list={ listItems } />
            </div>
            { news &&
                <>
                    <div className='nyheder'>

                        <div className="NewsDisplay">

                            { news.slice( ( currentPage * itemsPerPage ), ( ( currentPage * itemsPerPage ) + itemsPerPage ) ).map( n =>
                                <div className='SidsteNytBox' key={ n._id }>
                                    <div className="SidsteNytOverlay">
                                        <img src={ "http://localhost:5333/images/news/" + n.image } />
                                        <div className="bookmark">
                                            <span className="bookmarkleft"></span>
                                            <span className="bookmarkright"></span>
                                            <span className="bookmarkday">{ new Date( n.received ).toLocaleDateString( "en-GB", { day: "2-digit", } ) }</span>
                                            <span className="bookmarkmonth">{ new Date( n.received ).toLocaleDateString( "en-GB", { month: "short" } ) }</span>
                                        </div>
                                    </div>
                                    <article className="SidsteNytText">
                                        <h3>{ n.title }</h3>
                                        <p>{ n.content.slice( 0, 150 ) }...</p>
                                        <hr style={ { color: "#789", backgroundColor: "#789" } } />
                                    </article>
                                </div>
                            ) }
                        </div>
                        <aside>
                            <h3>Arkiv</h3>
                            { news && news.slice( 0, 4 ).map( ( n ) =>
                                <div className='asidecomponents'>
                                    <img src={ "http://localhost:5333/images/news/" + n.image } />
                                    <div className='txt'>
                                        { n.title }
                                        <div className="date">
                                            <GoCalendar />
                                            { new Date( n.received ).toLocaleDateString( "en-GB", { day: "2-digit", month: "short", year: "numeric" } ) }
                                        </div>
                                    </div>

                                </div>

                            ) }
                        </aside>

                    </div>
                    <Pagination itemsPerPage={ itemsPerPage } itemsLength={ news.length } currentPage={ currentPage } setCurrentPage={ setCurrentPage } />
                </>
            }
        </div>
    )
}

export default Tours