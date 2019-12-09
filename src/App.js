import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'

import Header from './components/Header.js'
import Navbar from './components/Navbar.js'
import Products from './components/Products.js'
import UpcomingItems from './components/UpcomingItems.js'
import About from './components/About.js'

import "./style/body.css"

class App extends Component {
  constructor(){
    super()
    this.state = {
      products: [],
      upcomingItems: [],
      filteredProducts: [],
      name: "",
      description: "",
      rarity: "",
      cost: "",
      type: "",
      image: ""
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
    this.getUpcomingItems()
  }


  getProducts = () => {
    axios.get('https://fnapi.me/api/items/all?lang=en&filter={{filterId}}', { headers: { 'Authorization': `${process.env.REACT_APP_KEY}` }}
    )
    .then(res => {
      this.setState({
        products: res.data.data
      })
    })
    .catch(err => console.log(err))
}

  getUpcomingItems = () => {
    axios.get('https://fnapi.me/api/items/upcoming?lang={{lang}}', { headers: { 'Authorization': `${process.env.REACT_APP_KEY}` }})
    .then(res => {
      this.setState({
        upcomingItems: res.data.data
      })
    })
    .catch(err => console.log(err))
  }
  
  saveItem = item => {
    alert("Item was successfully saved to your favorites.")
    const savedItem = { name: item.name, description: item.description, rarity: item.rarity, cost: item.cost, type: item.type, image: item.image }

    if (localStorage.getItem("saved")) {
        const saved = JSON.parse(localStorage.getItem("saved"))
        saved.push(savedItem)
        localStorage.setItem("saved", JSON.stringify(saved))
    } else {
        const saved = []
        saved.push(savedItem)
        localStorage.setItem("saved", JSON.stringify(saved))
    }
  }

  render(){
    return(
      <div>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path='/' render={rProps => <Products {...rProps} filteredProducts={this.state.filteredProducts} getByType={this.getByType} getProducts={this.getProducts} products={this.state.products} removeFilter={this.removeFilter} saveItem={this.saveItem} />}/>
          <Route path='/upcomingitems' render={rProps => <UpcomingItems {...rProps} getUpcomingItems ={this.getUpcomingItems} upcomingItems={this.state.upcomingItems}/>}/>
          <Route path='/about' component={About}/>
        </Switch>
      </div>
    )
  }
}

export default App;
