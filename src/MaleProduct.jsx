import React from 'react'

export default class MaleProduct extends React.Component{

    handleAddToCart = () => {
        this.props.handlePostToCart(this.props.singleProd.id)
    }


    render(){

        let {image, name, price} = this.props.singleProd


        return(

            <div className="box">
                <img className="prodimg" src={image} alt={name} />
                <h2>{name}</h2>
                <div>${price}</div>
                <button className="button" onClick={this.handleAddToCart}>Add to Cart</button>
            </div>

        )
    }
}