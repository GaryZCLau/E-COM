import React from 'react'

export default class Cart extends React.Component{

    handleClick = () => {
        this.props.handleDelete(this.props.singleProd.id)
    }

    render(){

        // console.log(this.props.singleProd.product)

        let {image, name, price} = this.props.singleProd.product


        return(
            <div className="cartbox">
            <button className="cartbutton" onClick={this.handleClick}>X</button>
            <img className="cartimg" src={image} alt={name}/>
            <h2>{name}</h2>
            <p>${price}</p>
        </div>
        )
    }
}