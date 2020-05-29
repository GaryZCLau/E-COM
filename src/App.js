import React from 'react';
import {Switch, Route} from 'react-router-dom'
import NavBar from './NavBar.jsx'
import './App.css';
import Home from './Home'
import Female from './FemaleContainer'
import Male from './MaleContainer'
import Cart from './CartContainer'

class App extends React.Component {

  state = {
    cart: [],
    cps: [],
    maleProd: [],
    femaleProd: []
  }

  componentDidMount(){

    fetch("http://localhost:3000/carts").then(r => r.json())
    .then((cartObj) => {
      // console.log(cartObj)
      this.setState({
        cart: cartObj
      })

      let cpsObj = cartObj.find(cObj => {return cObj.cps})
      // console.log(cpsObj)

      this.setState({
        cps: cpsObj.cps
      })
    })

    fetch('http://localhost:3000/sexes').then(r=>r.json())
    .then((sexObj) => {
      // console.log(sexObj)

      let femaleObj = sexObj.find(sexObj => {return sexObj.gender === "female"})
      let maleObj = sexObj.find(sexObj => {return sexObj.gender === "male"})

      this.setState({
        femaleProd: femaleObj.products,
        maleProd: maleObj.products
      })
    })
  }


  handlePostToCart = (productId) => {
    // console.log(productId)
    // console.log(this.state.cart[0].id)
    let cartId = this.state.cart[0].id
    fetch('http://localhost:3000/cps', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        cart_id: cartId,
        product_id: productId
      })
    }).then(r=>r.json()).then((newCpObj) => {
      console.log(newCpObj)
      let copyOfCps = [...this.state.cps, newCpObj]
      this.setState({
        cps: copyOfCps
      })
    })
  }

  handleDelete = (cpId) => {
    // console.log(cpId)
    fetch(`http://localhost:3000/cps/${cpId}`, {
      method: "DELETE"
    })
    .then(r=>r.json())
    .then((deletedCp) => {
      let copyOfCps = this.state.cps.filter((singleCp) => {
        return singleCp.id !== cpId
      })
      this.setState({cps: copyOfCps})
    })
  }
  

  render(){

    return (

      <div>
        <NavBar/>
        <hr/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/men" render={()=><Male maleProd={this.state.maleProd} handlePostToCart={this.handlePostToCart}/>}/>
          <Route path="/women" render={()=><Female femaleProd={this.state.femaleProd} handlePostToCart={this.handlePostToCart}/>}/>
          <Route path="/cart" render={()=><Cart cpsProd={this.state.cps} handleDelete={this.handleDelete}/>}/>
          <Route render={()=><h1 style={{textAlign:"center"}}>Page not found</h1>}/>
        </Switch>
        <hr className="bottomhr"/>
        
      </div>

    )
  }
}

export default App;
