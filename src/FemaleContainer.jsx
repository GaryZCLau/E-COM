import React from 'react'
import FemaleProduct from './FemaleProduct'

export default class FemaleContainer extends React.Component{


    render(){
        
        let arrayOfProd = this.props.femaleProd.map((prodObj) => {
            return <FemaleProduct 
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