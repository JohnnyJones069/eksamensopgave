import React, { useState } from 'react'
import ReactQuill from 'react-quill'

import { createNews } from '../../../api/news'

import 'react-quill/dist/quill.snow.css';
const modules = {
    toolbar: [
        [ 'bold', 'italic', 'underline', 'strike' ],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [ { 'color': [ '#000', '#e6000', '#ff9900' ] } ]
    ]

}



const AdminNyhedOpret = () => {

    const [ loading, setLoading ] = useState( false )
    const [ error, setError ] = useState( false )
    const [ message, setMessage ] = useState()


    const handleSubmit = ( e ) => {
        e.preventDefault() // Forhindre reload af side

        setLoading( true )

        let formData = new FormData( e.target )

        createNews( formData )
            .then( ( response ) => {
                e.target.reset() // Tømmere formularfelterne
                setMessage( "ny Nyhed er oprettet! id nummer: " + response.data._id )

            } )
            .catch( ( err ) => {
                setError( true )
                // console.log( err )
            } )
            .finally( () => {
                setLoading( false )
            } )

    }


    return (
        <div className='AdminOverwatch'>

            <h1>Opret en ny Nyhed</h1>

            { message && <h2>{ message }</h2> }
            <form onSubmit={ handleSubmit }>

                {/* Title */ }
                <div>
                    <label htmlFor='inpTitle'>Nyhed titel:</label>
                    <br />
                    <input type="text" name="title" placeholder='Skriv din titel her' id="inpTitle" required />
                </div>

                {/* Content */ }
                <div>
                    <label htmlFor='inpContent'>Nyhed Content:</label>
                    <br />
                    <textarea className='content' name="content" id="inpContent" placeholder='Skriv dit content her' required />
                    {/* <ReactQuill theme="snow" modules={modules} placeholder='Beskriv turen' onChange={ setContent }/> */}
                </div>

                {/* image */ }
                <div>
                    <label htmlFor='inpImg'>Vælg et billed</label>
                    <br />
                    <input type="file" accept='image/*' name="image" id="inpImg" required />
                </div>

                <button type='submit'>Opret Nyhed</button>




            </form>
        </div>
    )
}

export default AdminNyhedOpret