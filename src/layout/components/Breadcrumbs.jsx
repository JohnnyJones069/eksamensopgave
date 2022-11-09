import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ( { list } ) => {
    const [ title, setTitle ] = useState();

    useEffect( () => {
        list.map( ( i, k ) => {
            if ( !i[ 'link' ] ) {
                setTitle( i[ 'title' ] );
            }
        } );
    }, [] )

    return (
        <>
            <h1>{ title }</h1>
            <div className="breadcrumbs">
                <ul>
                    { list.map( ( i, k ) =>
                        i[ 'link' ] ? <li key={ k }> <Link to={ i[ 'link' ] }> { i[ 'title' ] } </Link> </li> : <li key={ k } className="current"> { i[ 'title' ] } </li>
                    ) }
                </ul>
            </div>
        </>
    )
}

export default Breadcrumbs;