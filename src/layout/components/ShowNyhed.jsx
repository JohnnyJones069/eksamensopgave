import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getNewsByID } from '../../api/news'
import AsideComponent from './Aside';
import Breadcrumbs from './Breadcrumbs';
import { FaComments } from 'react-icons/fa'
import { GoCalendar } from 'react-icons/go'



const AdminToursEdit = () => {

    const { ID } = useParams()

    const [ news, setNews ] = useState()
    const [ error, setError ] = useState( false )
    const [ loading, setLoading ] = useState( false )
    const [ message, setMessage ] = useState()

    const listItems = [
        { title: 'Forside', link: '/' },
        { title: 'Nyheder', link: '/nyheder' },
        { title: news?.title, link: '' }

    ]
    useEffect( () => {
        setLoading( true )
        getNewsByID( ID )
            .then( ( response ) => {
                setNews( response.data )

                // setContent( response.data.content )
                // setRoomtype( response.data.roomtype )

                setError( false )
            } )
            .catch( ( err ) => {
                setError( true )
                setNews() // Tøm data
            } )
            .finally( () => {
                setLoading( false )
            } )
    }, [] )


    return (
        <div className='ShowNyhedID'>
            <div className="breadcrumbsdiv">
                <Breadcrumbs list={ listItems } />
            </div>

            {
                news && <div>
                    <div className="ShowNyhedFlex">
                        <div className="ShowNyhedElement">
                            <div className='ShowNyhedcard'>
                                <div className="ShowNyhedImage">
                                    <img src={ "http://localhost:5333/images/news/" + news.image } />
                                    <div className="bookmark">
                                        <span className="bookmarkleft"></span>
                                        <span className="bookmarkright"></span>
                                        <span className="bookmarkday">{ new Date( news.received ).toLocaleDateString( "en-GB", { day: "2-digit", } ) }</span>
                                        <span className="bookmarkmonth">{ new Date( news.received ).toLocaleDateString( "en-GB", { month: "short" } ) }</span>
                                    </div>
                                </div>
                                <div className="ShowNyhedinfobox">
                                    <p><FaComments /> { news.comments.length } kommentarer</p>
                                    <h2>{ news.title }</h2>
                                    <hr style={ { color: "#789", backgroundColor: "#789", margin: "20px" } } />
                                    <p>{ news.content }</p>
                                </div>
                            </div>
                            <div className="ShowNyhedKommentar">
                                <h3>Kommenteret ({ news.comments.length })</h3>

                                { news && news.comments.map( ( s, i ) =>
                                    <div className='ShowNyhedKommentarElement'>
                                        <h4>{ s.name }</h4>
                                        <h5><GoCalendar /> { new Date( s.received ).toLocaleDateString( "en-GB", { day: "2-digit", month: "short", year: "numeric" } ) }</h5>
                                        <p>{ s.comment }</p>
                                    </div>
                                )
                                }
                            </div>

                            <div className="SkrivEnKommentar">
                                <hr style={ { color: "#789", backgroundColor: "#789", margin: "20px" } } />
                                <h3>Skriv en kommentar</h3>
                                <div className='inputnameogmail'>
                                    <input className='inputname' type="name" name="" defaultValue="Navn"/>
                                    <input className='inputname' type="email" name="" defaultValue="Email"/>
                                </div>
                                <textarea className='inputkommentar' type="text" name="" defaultValue="Kommentar" />
                                <button>SEND BESKED</button>
                            </div>

                        </div>
                        <AsideComponent />
                    </div>
                </div>
            }



        </div>
    )
}

export default AdminToursEdit