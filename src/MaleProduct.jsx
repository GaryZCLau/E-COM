import React from 'react'

export default class MaleProduct extends React.Component{


    render(){

        let {image, name, description, price} = this.props.singleProd


        return(

            <div className="box">
                <img className="prodimg" src={image} alt={name} />
                <h2>{name}</h2>
                <div>${price}0</div>
                <button className="button">Add to Cart</button>
            </div>

        )
    }
}