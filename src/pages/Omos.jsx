import React from 'react'
import Breadcrumbs from '../layout/components/Breadcrumbs';

const listItems = [
  {title: 'Forside', link: '/'},
  {title: 'Om os', link: ''}
  
]

const Omos = () => {
  return (
    <div className='Omos'>
      <div className="breadcrumbsdiv">
        <Breadcrumbs list={listItems} />
      </div>
    </div>
  )
}

export default Omos