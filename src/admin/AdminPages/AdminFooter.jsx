import React, { useState, useEffect } from 'react'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import { getFooter, editFooter } from '../../api/footer'
import useThumb from '../../hooks/useThumb'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import MessageBox from '../components/MessageBox'
const modules = {
    toolbar: [
        [ 'bold', 'italic', 'underline', 'strike' ],
        [ { 'list': 'ordered' }, { 'list': 'bullet' } ],
        [ { 'color': [ '#000', '#e6000', '#ff9900' ] } ]
    ]
}

const AdminFooter = () => {
    const [ footer, setFooter ] = useState()
    const [ error, setError ] = useState( false )
    const [ loading, setLoading ] = useState( false )

    const [ content, setContent ] = useState()
    const [ message, setMessage ] = useState()

    const [ thumbImage, makeThumb ] = useThumb()

    useEffect( () => {
        setLoading( true )
        getFooter()
            .then( ( response ) => {
                setFooter( response.data )
                setError( false )
            } )
            .catch( ( err ) => {
                setError( err )
                setFooter()
            } )
            .finally( () => {
                setLoading( false )
            } )

    }, [ message ] )

    const handleSubmit = ( e ) => {
        e.preventDefault()

        setLoading( true )

        let formData = new FormData( e.target )

        formData.append( "content", content )

        editFooter( formData )
            .then( ( response ) => {
                console.log( response.data )
                setMessage( "Footeren er rettet!" )

                // Tøm input-file og thumbnail
                e.target.form.image.value = "";
                makeThumb( "" );
            } )
            .catch( ( err ) => {
                setError( true )
                console.log( err )
            } )
            .finally( () => {
                setLoading( false )
                // window.scrollTo( 0, 0 ) // Scroll to top of page
            } )
    }

    return (
        <div>
            AdminFooter
            {/* <h1>Ret Footer segmentet</h1> */}
        </div>
    )
}

export default AdminFooter