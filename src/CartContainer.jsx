import React from 'react'
import Cart from './Cart'

export default class CartContainer extends React.Component{

    grandTotal = () => {
        let newTotal = 0
        this.props.cpsProd.forEach((cpsObj) => {
            let price = cpsObj.product.price
            newTotal += price
        })
        return newTotal
    }

    handleCheckOut = () => {
        alert("Order Received!")
    }
    
    render(){


        let arrayOfCarts = this.props.cpsProd.map((cpsObj) => {
            return <Cart 
                singleProd={cpsObj}
                key={cpsObj.id}
                handleDelete={this.props.handleDelete}
            />
        })

        return(
            <div>
                {arrayOfCarts}
                <h2 className="total">Total: ${this.grandTotal()}</h2>
                <button className="checkoutbutton" onClick={this.handleCheckOut}>Check Out!</button>
            </div>
        )
    }
}