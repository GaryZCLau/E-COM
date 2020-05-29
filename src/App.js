import React from 'react';
import {Switch, Route} from 'react-router-dom'
import NavBar from './NavBar.jsx'
import './App.css';
import Home from './Home'
import Female from './FemaleContainer'
import Male from './MaleContainer'
import Cart from './Cart'

class App extends React.Component {

  state = {
    cart: [],
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
    })

    fetch('http://localhost:3000/sexes').then(r=>r.json())
    .then((sexObj) => {
      console.log(sexObj)

      let femaleObj = sexObj.find(sexObj => {return sexObj.gender === "female"})
      let maleObj = sexObj.find(sexObj => {return sexObj.gender === "male"})

      this.setState({
        femaleProd: femaleObj.products,
        maleProd: maleObj.products
      })
    })



  }
  

  render(){

    // console.log(this.state)
    // let femaleObj = this.state.sex.find(sexObj => {return sexObj.gender === "female"})
    // console.log(femaleObj)

    // let maleObj = this.state.sex.find(sexObj => {return sexObj.gender === "male"})
    // console.log(maleObj)


    return (

      <div>
        <NavBar/>
        <hr/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/men" render={()=><Male maleProd={this.state.maleProd}/>}/>
          <Route path="/women" render={()=><Female femaleProd={this.state.femaleProd} />}/>
          <Route path="/cart" render={()=><Cart />}/>
          <Route render={()=><h1 style={{textAlign:"center"}}>Page not found</h1>}/>
        </Switch>
      </div>

    )
  }
}

export default App;
