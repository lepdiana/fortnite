import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'

import Header from './components/Header.js'
import Navbar from './components/Navbar.js'
import Products from './components/Products.js'
import Populars from './components/Populars.js'
import About from './components/About.js'



class App extends Component {
  constructor(){
    super()
    this.state = {
      products: [],
      populars: [],
      filteredProducts: []
    }
  }

  getByType = (type) => {
    const filteredArr = this.state.products.filter(product => product.item.type === type)
    this.setState({
      filteredProducts: filteredArr
    })
  }

  removeFilter = () => {
    this.setState(prevState => {
        return { filteredProducts: prevState.products }
      })
  }


  componentDidMount(){
    this.getProducts()
    // this.getPopulars()
  }


  getProducts = () => {
    axios.get('https://fnapi.me/api/items/all?lang=en&filter={{filterId}}', { headers: {'Authorization': `${process.env.REACT_APP_KEY}` }},
    )
    .then(res => {
      this.setState({
        products: res.data.data
      })
    })
    .catch(err => console.log(err))
}

  // getPopulars = () => {
  //   axios.get('https://vschool-cors.herokuapp.com?url=https://fortnite-api.theapinetwork.com/items/popular')
  //   .then(res => {
  //     this.setState({
  //       populars: res.data.entries[3].entries
  //     })
  //   })
  //   .catch(err => console.log(err))
  // }
  
 

  render(){

    // const mappedPopulars = this.state.populars.map(popular => <Populars {... popular} key={popular.identifier}/>)
  

    return(
      <div>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path='/' render={rProps => <Products {...rProps} filteredProducts={this.state.filteredProducts} getByType={this.getByType} getProducts={this.getProducts} products={this.state.products} removeFilter={this.removeFilter}/>}/>
          {/* <Route path='/populars' render={rProps => <Populars {...rProps} mappedPopulars={mappedPopulars}/>}/> */}
          <Route path='/about' component={About}/>
        </Switch>
      </div>
    )
  }
}

export default App;
