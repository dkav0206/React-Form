import React, { Component } from 'react'
import Banner from './Banner'
import Item from './Item'

export default class Body extends Component {
  render() {
    return (
      <div>
        <div className='container mt-4 mb-4'>
          <Banner/>
        </div>
        <div className="container mt-4 mb-4">
          <div className="row" >
            <div className="col-lg-6 col-xxl-4 mb-2">
              <Item/>
            </div>
            <div className="col-lg-6 col-xxl-4 mb-2">
              <Item/>
            </div>
            <div className="col-lg-6 col-xxl-4 mb-2">
              <Item/>
            </div>
         </div>
        </div>
       
      </div>
    )
  }
}
