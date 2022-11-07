import React from 'react'
import {BiSearch} from 'react-icons/bi'
// import { useNavigate } from 'react-router-dom'


const SearchInput = () => {

    // const navigate = useNavigate()

    // const handleSearch = ( e ) => {
    //     e.preventDefault()
    //     navigate( "/searchresult/" + e.target.inpSearch.value )
    // }

// onSubmit={ handleSearch } i form
    return (
        <form className='Searchinput'> 
            <input type="text" name="inpSearch" placeholder='Søg' />
            <button type="submit"><BiSearch /></button>

        </form>
    )
}

export default SearchInput