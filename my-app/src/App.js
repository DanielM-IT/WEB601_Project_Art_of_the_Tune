import React, {Component} from 'react'
import './App.css'
import {Switch,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Support from './Components/Support'
import MyAccount from './Components/MyAccount'
import Default from './Components/Default'
import BrowseMusic from './Components/BrowseMusic'
import Footer from './Components/Footer'
import Login from './Components/Login'
import SignUp from './Components/SignUp';


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
          <Footer />
        </div>
      </div>
    )
  }
}



export default App;
