import React from 'react'

export default class Cart extends React.Component{


    render(){

        // console.log(this.props.singleProd.product)

        let {image, name, price} = this.props.singleProd.product


        return(
        <div className="cartbox">
            <img className="cartimg" src={image} alt={name}/>
            <h2>{name}</h2>
            <div>${price}</div>
        </div>
        )
    }
}