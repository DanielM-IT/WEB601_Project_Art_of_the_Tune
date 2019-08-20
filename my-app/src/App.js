import React, {Component} from 'react'
import './App.css'
import {Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Support from './components/Support'
import MyAccount from './components/MyAccount'
import Default from './components/Default'
import BrowseMusic from './components/BrowseMusic'
import Footer from './components/Footer'
import Login from './components/Login'
import SignUp from './components/SignUp';


class App extends Component {
  render()  {
    return(
      <div className="container">
        <div className="header">
          <Navbar />

        </div>
        <div className="body"> 
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/BrowseMusic" component={BrowseMusic} />
            <Route path="/Support" component={Support} />
            <Route path="/Login" component={Login} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/MyAccount" component={MyAccount} />
            <Route component={Default} />
          </Switch>
        </div>
        <div className="footer">
          <Footer></Footer>
        </div>
      </div>
    )
  }
}



export default App;
