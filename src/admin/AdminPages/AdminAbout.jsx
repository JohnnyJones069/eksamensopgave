import React, { useState, useEffect } from 'react'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import { getAbout, editAbout } from "../../api/about";
import useThumb from '../../hooks/useThumb';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import MessageBox from '../components/MessageBox'
const modules = {
  toolbar: [
    [ 'bold', 'italic', 'underline', 'strike' ],
    [ { 'list': 'ordered' }, { 'list': 'bullet' } ],
    [ { 'color': [ '#000', '#e6000', '#ff9900' ] } ]
  ]
}

const AdminAbout = () => {

  const [ about, setAbout ] = useState()
  const [ error, setError ] = useState( false )
  const [ loading, setLoading ] = useState( false )

  const [ content, setContent ] = useState()
  const [ teaser, setTeaser ] = useState()
  const [ title, setTitle ] = useState()
  const [ message, setMessage ] = useState()
  const [ thumbImage, makeThumb ] = useThumb()


  useEffect( () => {
    setLoading( true )
    getAbout()
      .then( ( response ) => {
        setAbout( response.data )
        setError( false )
      } )
      .catch( ( err ) => {
        setError( err )
        setAbout()
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
    formData.append( "title", title )

    editAbout( formData )
      .then( ( response ) => {
        console.log( response.data )
        setMessage( "Om os er rettet!" )

        // Tøm input-file og thumbnail
        e.target.form.image.value = "";
        makeThumb( "" );

      } )
      .catch( ( err ) => {
        setError( true )
      } )
      .finally( () => {
        setLoading( false )
        // window.scrollTo( 0, 0 ) // Scroll to top of page
      } )

  }

  const resetFileupload = ( e ) => {
    e.target.form.image.value = ""; // Tøm input-feltet med name="image"
    makeThumb( "" );
  }

  return (
    <div>
      <h1>Ret About segmentet</h1>
      { error && <ErrorMessage /> }
      { loading && <Loader /> }
      { message && <MessageBox messagetitle={ message } emptyMessage={ setMessage } /> }

      { about && <div className='AdminOverwatch'>
        <form onSubmit={ handleSubmit }>
          <div>
            <label htmlFor="inpTitle">Titel</label>
            <br />
            <ReactQuill className='quill' theme="snow" modules={ modules } defaultValue={ about.title } onReady={ !title ? setTitle( about.title ) : null } onChange={ setTitle } />
            {/* <input type="text" defaultValue={ about.title } name="title" id="inpTitle" placeholder="Indtast title" /> */}
          </div>
          <div>
            <label htmlFor="inpTeaser">Teaser</label>
            <br />
            <ReactQuill className='quill' theme="snow" modules={ modules } defaultValue={ about.teaser } onReady={ !teaser ? setTeaser( about.teaser ) : null } onChange={ setTeaser } />
          </div>
          <div>
            <label htmlFor="inpContent">Content</label>
            <br />
            <ReactQuill className='quill' theme="snow" modules={ modules } defaultValue={ about.content } onReady={ !content ? setContent( about.content ) : null } onChange={ setContent } />
          </div>
          <div>
            <p>Nuværende Billed:</p>
            <img src={ "http://localhost:5333/images/about/" + about.image } alt="Om os billed" width="300px" />
            <br />
            <label htmlFor='inpImg'>Vælg evt. et andet billed</label>
            <br />
            <input type="file" accept='image/*' name="image" id="inpImg" onChange={ ( e ) => makeThumb( e.target.files[ 0 ] ) } />
            <br />
            {
              thumbImage &&
              <>
                <img src={ thumbImage } width="300px" alt="thumbnail-billed" />

                <button onClick={ resetFileupload }>&#10006;</button>
              </>



              // thumbImage && {thumbImage} // For at gøre det nemmere. (Husk at du kan lave en class på img-tagget i useThumb.jsx)
            }


          </div>
          <button type='submit'>Ret About segment</button>
        </form>
      </div>
      }

    </div>
  )
}

export default AdminAbout