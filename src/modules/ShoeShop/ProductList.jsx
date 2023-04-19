import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {


   
    render() {
        let {productsData} = this.props;

        const renderProduct = (productsData) => { 
          return productsData.map((product) => {
              return (
                <ProductItem item={product} setStateModal={this.props.setStateModal(product)}/>
              );
          }) //binding data => UI 
        }
        

        return (
        <div className='container'>
            <h1>Shoe Shop</h1>
            <div className="row ">
                {renderProduct(productsData)}
            </div>
        </div>
        )
    }
}
