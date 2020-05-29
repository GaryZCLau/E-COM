import React from 'react'
import MaleProduct from './MaleProduct'

export default class MaleContainer extends React.Component{


    render(){

        console.log(this.props)
        
        let arrayOfProd = this.props.maleProd.map((prodObj) => {
            return <MaleProduct 
                singleProd={prodObj}
                key={prodObj.id}
                handlePostToCart={this.props.handlePostToCart}
            />
        })

        return(
            <div>
                {arrayOfProd}
            </div>
        )
    }
}