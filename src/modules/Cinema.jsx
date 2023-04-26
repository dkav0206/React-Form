import React, { Component } from 'react'

import './style.css'
import Screen from './Screen'
import TicketBook from './TicketBook'

export default class Cinema extends Component {
    render() {
        return (
        <div className='container-fluid bookingMovie mainPage'>
            <div className="row">
                <div className='col-xl-8 col-l-6 mt-2'>
                <Screen/>
                </div>
                <div className='col-xl-4 col-l-6 mt-4'>
                    <TicketBook/>
                </div>  
            </div>
        </div>
    )
  }
}
