import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader'
import { getNewsByID, editNews } from '../../../api/news'
import ErrorMessage from '../../components/ErrorMessage'

import 'react-quill/dist/quill.snow.css';
import MessageBox from '../../components/MessageBox'
const modules = {
    toolbar: [
        [ 'bold', 'italic', 'underline', 'strike' ],
        [ { 'list': 'ordered' }, { 'list': 'bullet' } ],
        [ { 'color': [ '#000', '#e6000', '#ff9900' ] } ]
    ]
}

const AdminNyhedRet = () => {

    const { ID } = useParams()
    // console.log( ID );

    const [ news, setNews ] = useState()
    const [ error, setError ] = useState( false )
    const [ loading, setLoading ] = useState( false )
    const [ message, setMessage ] = useState()

    //   const [ content, setContent ] = useState()
    //   const [ roomtype, setRoomtype ] = useState()

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

    const handleSubmit = ( e ) => {
        e.preventDefault()

        setLoading( true )

        let formData = new FormData( e.target )

        // formData.append( "content", content )
        // formData.append( "roomtype", roomtype )

        editNews( formData, ID )
            .then( ( response ) => {
                console.log( response.data )
                setMessage( "Nyheden er rettet!" )

            } )
            .catch( ( err ) => {
                setError( true )
                // console.log( err )
            } )
            .finally( () => {
                setLoading( false )
                window.scrollTo( 0, 0 ) //Scroll to top of page
            } )

    }

    return (
        <div className='AdminOverwatch'>

            <h1>Ret Nyhed</h1>

            { error && <ErrorMessage /> }
            { loading && <Loader /> }
            { message && <MessageBox messagetitle="Du har ikke valgt nok elementer" emptyMessage={ setMessage } /> }

            {
                news && <div>

                    <form onSubmit={ handleSubmit }>

                        {/* Title */ }
                        <div>
                            <label htmlFor='inpTitle'>Nyhed titel:</label>
                            <br />
                            <input type="text" name="title" defaultValue={ news.title } id="inpTitle" required />
                        </div>

                        {/* Content */ }
                        <div>
                            <label htmlFor='inpContent'>Nyhed Content:</label>
                            <br />
                            <textarea className='content' name="content" id="inpContent" required defaultValue={news.content} />
                            {/* <ReactQuill theme="snow" modules={ modules } defaultValue={ news.content } onChange={ setContent } /> */}
                        </div>

                        {/* image */ }
                        <div>
                            <p>Nuværende Billed:</p>
                            <img src={ "http://localhost:5333/images/news/" + news.image } width="200px" alt='Nyhed billed'/>
                            <br />
                            <label htmlFor='inpImg'>Vælg evt. et andet billed</label>
                            <br />
                            <input type="file" accept='image/*' name="image" id="inpImg" />
                        </div>

                        <button type='submit'>Ret Nyhed</button>




                    </form>
                </div>
            }



        </div>
    )
}

export default AdminNyhedRet