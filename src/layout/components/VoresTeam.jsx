import React, { useState, useEffect } from 'react'
import { getAllTeam } from '../../api/voresteam';
import { FaPinterestP, FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa'


const VoresTeam = () => {
    const [ error, setError ] = useState( false );
    const [ loading, setLoading ] = useState( false );
    const [ team, setTeam ] = useState()

    useEffect( () => {
        setLoading( true )
        getAllTeam()
            .then( ( teamdata ) => {
                setTeam( teamdata.data )
                setError( false )
            } )
            .catch( ( err ) => {
                setError( true )
                setTeam()
            } )
            .finally( () => {
                setLoading( false )
            } )
    }, [] )


    return (
        <div className='voresteam'>
            <article className="headline">
                <h2>Vores <span className='orange'>team</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab obcaecati similique debitis.</p>
                <div className="litleicon">
                    <span className="line"></span>
                    <span className='circle'></span>
                    <span className='line'></span>
                </div>
            </article>

            <div className="team">
                { team && team.map( ( t, i ) =>
                    <div className="teamMember" key={ i }>
                        <img src={ "http://localhost:5333/images/team/" + t.image }  alt="Hold medlems billed"/>
                        <div className='overlay' key={ i }>
                            <div className="triangleLeftA"></div>
                            <div className="triangleLeftB"></div>
                            <h3>{ t.name }</h3>
                            <p>{ t.title }</p>
                            <div className='teamSocial'>
                                <FaFacebookF style={ { cursor: "pointer" } } />
                                <FaTwitter style={ { cursor: "pointer" } } />
                                <FaLinkedinIn style={ { cursor: "pointer" } } />
                                <FaPinterestP style={ { cursor: "pointer" } } />
                            </div>
                        </div>
                    </div>
                )

                }
            </div>

        </div>
    )
}

export default VoresTeam