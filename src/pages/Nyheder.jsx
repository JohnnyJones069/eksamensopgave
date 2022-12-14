import React, { useState, useEffect } from 'react'
import { getAllNews } from '../api/news';
import Pagination from '../layout/components/Pagination';
import Breadcrumbs from '../layout/components/Breadcrumbs';
import { GoCalendar } from 'react-icons/go'
import { FaComments } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import AsideComponent from '../layout/components/Aside';
import AmountPerPage from '../layout/components/AmountPerPage';

const listItems = [
    { title: 'Forside', link: '/' },
    { title: 'Nyheder', link: '' }

]

const Nyheder = () => {

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
            <div className='wrapper'>

                { news &&
                    <>
                    <div className='amountprpage'>
                    <AmountPerPage itemsPerPage={ itemsPerPage } setItemsPerPage={ setItemsPerPage } setCurrentPage={ setCurrentPage } options={ [ 2, 4, 6 ] } />
                    </div>
                        <div className='nyheder'>

                            <div className="newsWrapper">
                                { news.map( n =>
                                    <div className="newsElement" key={ n._id }>
                                        <Link className='normaltext' to={ "/nyheder/" + n._id }>
                                            <div className='newsBox'>
                                                <div className="SidsteNytOverlay">
                                                    <img src={ "http://localhost:5333/images/news/" + n.image } alt="Nyhed foto" />
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
                                                    <p><FaComments /> { n.comments.length } kommentarer</p>
                                                </article>
                                            </div>
                                        </Link>
                                    </div>
                                ).reverse().slice( ( currentPage * itemsPerPage ), ( ( currentPage * itemsPerPage ) + itemsPerPage ) )
                                }
                            </div>
                            <AsideComponent className="DontBeSeen" />

                        </div>
                        <Pagination itemsPerPage={ itemsPerPage } itemsLength={ news.length } currentPage={ currentPage } setCurrentPage={ setCurrentPage } />
                    </>
                }
            </div>
        </div>
    )
}

export default Nyheder