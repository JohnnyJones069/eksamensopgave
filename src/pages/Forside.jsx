import React, { useState, useEffect } from 'react'
import { getSlider } from '../api/slider'
import OmStrøm from '../layout/components/OmStrøm';
import Slider from '../layout/components/Slider';
import VoresServices from '../layout/components/VoresServices';
// import Loader from '../components/Loader';
// import ErrorMessage from '../components/ErrorMessage';

// import Slider from '../layout/components/Slider'


const Forside = () => {

  const [ error, setError ] = useState( false );
  const [ loading, setLoading ] = useState( false );
  const [ slider, setSlider ] = useState()

  useEffect( () => {
    setLoading( true )
    getSlider()
      .then( ( sliderdata ) => {
        setSlider( sliderdata.data )
        setError( false )
      } )
      .catch( ( err ) => {
        setError( true )
        setSlider()
      } )
      .finally( () => {
        setLoading( false )
      } )
  }, [] )

  return (
    <div>
      { slider &&
        <Slider sliderImages={slider} imagePath="http://localhost:5333/images/slider/"/>
      }
      <OmStrøm />
      <div className="hjaelpfrastroem">
        <h1>Skal du bruge <span>hjælp</span> fra <span>Strøm?</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, tenetur.</p>
        <button>KONTAKT OS</button>
      </div>
      <VoresServices />
    </div>
  )
}

export default Forside