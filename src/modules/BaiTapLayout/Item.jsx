import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
        <div className="card">
        <img src="https://yarwoodleather.com/wp-content/uploads/2016/12/Cosmopolitan-Pearly-Grey.jpg" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
  }
}
