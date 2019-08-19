import React, {Component} from 'react'
import './App.css'
import {Switch, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import Details from './Components/Details'
import Default from './Components/Default'
import Footer from './Components/Footer'


class App extends Component {
  render()  {
    return(
      <div className="container">
        <div className="header">
          <Navbar />
          <Switch>
            <Route path="/" component={Product} />
            <Route path="./Components/details" component={Details} />
            <Route component={Default} />
          </Switch>
        </div>
        <div className="Body">
        </div>
        <div className="footer">
          <Footer></Footer>
        </div>
      </div>
    )
  }
}



export default App;
