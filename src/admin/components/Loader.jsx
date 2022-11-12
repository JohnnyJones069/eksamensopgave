import React from 'react'
import loaderimg from '../../layout/assets/img/icons/preloader.gif'

const Loader = () => {
  return (
    <>
      <div className='Loader'><img src={loaderimg} alt="loading..." /></div>
      <div className="Laoder-bg-overlay"></div>
    </>
  )
}

export default Loader