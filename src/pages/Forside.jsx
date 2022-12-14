import React, { useState, useEffect } from 'react'
import { getSlider } from '../api/slider'
import OmStrøm from '../layout/components/OmStrøm';
import SidsteNyt from '../layout/components/SidsteNyt';
import Slider from '../layout/components/Slider';
import VoresKunderSiger from '../layout/components/VoresKunderSiger';
import VoresServices from '../layout/components/VoresServices';
import VoresTeam from '../layout/components/VoresTeam';
import { Link } from 'react-router-dom';
// import Loader from '../admin/components/Loader';
// import ErrorMessage from '../components/ErrorMessage';



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
        <Slider sliderImages={ slider } imagePath="http://localhost:5333/images/slider/" />
      }
      <OmStrøm />
      <div className="hjaelpfrastroem">
        <h1>Skal du bruge <span>hjælp</span> fra <span>Strøm?</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <Link to="/kontaktos">
          <button>KONTAKT OS</button>
        </Link>
      </div>
      <VoresServices />
      <VoresKunderSiger />
      <VoresTeam />
      <SidsteNyt />
    </div>
  )
}

export default Forside