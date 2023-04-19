import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        const {item, setStateModal} = this.props;
        return (
        <div className="col-4 mt-2" >
            <div className='card'>
                <img src={item.image} alt="" />
                <div className="card-body">
                    <p>{item.name}</p>
                    <p>${item.price.toLocaleString()}</p>
                    <button className='btn bg-dark text-bg-dark' onClick={setStateModal}>+ Add to Cart</button>
                </div>
            </div>
        </div>
        )
    }
}
