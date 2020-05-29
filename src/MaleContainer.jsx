import React from 'react'
import MaleProduct from './MaleProduct'

export default class MaleContainer extends React.Component{


    render(){
        
        let arrayOfProd = this.props.maleProd.map((prodObj) => {
            return <MaleProduct 
                singleProd={prodObj}
                key={prodObj.id}
            />
        })

        return(
            <div>
                {arrayOfProd}
            </div>
        )
    }
}