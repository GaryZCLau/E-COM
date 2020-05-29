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
    
    render(){


        let arrayOfCarts = this.props.cpsProd.map((cpsObj) => {
            return <Cart 
                singleProd={cpsObj}
                key={cpsObj.id}
            />
        })

        return(
            <div>
                {arrayOfCarts}
                <h2 className="total">Total: ${this.grandTotal()}</h2>
                <button className="checkoutbutton">Check Out!</button>
            </div>
        )
    }
}