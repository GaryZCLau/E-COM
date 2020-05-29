import React from 'react'

export default class FemaleProduct extends React.Component{


    render(){

        let {image, name, price} = this.props.singleProd


        return(

            <div className="box">
                <img className="prodimg" src={image} alt={name}/>
                <h2>{name}</h2>
                <div>${price}0</div>
                <button className="button">Add to Cart</button>
            </div>

        )
    }
}