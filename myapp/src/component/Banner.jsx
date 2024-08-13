import React from 'react'
import Slide from './Slide'

const Banner = () => {
  return (
  <div>
    <div className="container">
      <div className="row">
      <div className="col-md-6 mt-4" >
          <h1>Check out our Latest books</h1>
          <input className='form-control' placeholder='Search' />
        </div>
        <div className="col-md-6 mt-4">
          <Slide/>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Banner
