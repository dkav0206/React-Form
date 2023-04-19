import React, { Component } from 'react'

export default class Modal extends Component {


    render() {
        const {content} = this.props;

        return (
            <div className="row mt-5">
                <div className="col-3">
                    <h2>Ten San Pham: {content.name}</h2>
                    <img src={content.image} alt=""  style={{width:'100%'}}/>
                </div>

                <div className="col-9">
                    <h2>Thông tin sản phẩm</h2>
                    <table className='table'>
                        <tr>
                            <td>Alias</td>
                            <td>{content.alias}</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>{content.price}</td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td>{content.description}</td>
                        </tr>
                        <tr>
                            <td>Short Description</td>
                            <td>{content.shortDescription}</td>
                        </tr>
                        <tr>
                            <td>Quantity</td>
                            <td>{content.quantity}</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}
