import React, { useState, useEffect } from 'react'
import Breadcrumbs from '../layout/components/Breadcrumbs';
import { getAbout } from '../api/about';
import parser from 'html-react-parser';
import { Link } from 'react-router-dom';
import VoresKunderSiger from '../layout/components/VoresKunderSiger';
import VoresTeam from '../layout/components/VoresTeam';


const listItems = [
  { title: 'Forside', link: '/' },
  { title: 'Om os', link: '' }

]

const Omos = () => {

  const [ error, setError ] = useState( false );
  const [ loading, setLoading ] = useState( false );
  const [ about, setAbout ] = useState()



  useEffect( () => {
    setLoading( true )
    getAbout()
      .then( ( aboutdata ) => {
        setAbout( aboutdata.data )
        setError( false )
      } )
      .catch( ( err ) => {
        setError( true )
        setAbout()
      } )
      .finally( () => {
        setLoading( false )
      } )
  }, [] )
  return (
    <div className='Omos'>
      <div className="breadcrumbsdiv">
        <Breadcrumbs list={ listItems } />
      </div>
      { about &&
        <div className="AboutStroem">
          <section className="about-stroem-headlinetext">
            <h1>{ parser( about.title ) }</h1>
            <article><p>{ about.teaser }</p></article>
            <div className="litleicon">
              <span className="line"></span>
              <span className='circle'></span>
              <span className='line'></span>
            </div>
          </section>
          <div className="about-stroem-undertext">
            <article className="about-stroem-undertext-textelement">
              { parser( about.content ) }
              <Link to="/kontaktos">
                <button>KONTAKT OS</button>
              </Link>
            </article>
            <div className="about-stroem-undertext-imageelement">
              <img src={ "http://localhost:5333/images/about/" + about.image } alt="Om Strøm foto" width="100%" />
            </div>
          </div>
        </div>
      }

      <VoresKunderSiger />
      <VoresTeam />
    </div>
  )
}

export default Omos